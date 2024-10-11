import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, Input, Text, useToast } from "@chakra-ui/react";
import { useCart } from "../../hooks/useCart";
import CartDetails from "../CartDetails/CartDetails";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

function CheckoutDrawer() {
    const { clearCart, isOpenDrawer, setOpenDrawer } = useCart();

    const validations = Yup.object().shape({
        nombre: Yup.string().required("Tu nombre completo es requerido"),
        correo: Yup.string().email("Ingresá un email válido").required("Tu email es requerido"),
        direccion: Yup.string().required("La dirección es requerida"),
        codigoPostal: Yup.string().required("El código postal es requerido"),
        localidad: Yup.string().required("La localidad es requerida"),
    });

    const FormField = ({ id, label, placeholder, type, errors, touched }) => (
        <Field name={id}>
            {({ field }) => (
                <FormControl id={id} mb={4} isRequired isInvalid={touched[id] && !!errors[id]}>
                    <FormLabel>{label}</FormLabel>
                    <Input {...field} type={type} placeholder={placeholder} />
                    {touched[id] && errors[id] && <Text color="red.500">{errors[id]}</Text>}
                </FormControl>
            )}
        </Field>
    );

    const toast = useToast();

    return (
        <Drawer isOpen={isOpenDrawer("checkout")} onClose={() => setOpenDrawer("")} placement="right" size="md">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader>Resumen</DrawerHeader>

                <Formik
                    initialValues={{
                        nombre: "",
                        correo: "",
                        direccion: "",
                        codigoPostal: "",
                        localidad: ""
                    }}
                    validationSchema={validations}
                    onSubmit={(values) => {
                        toast({
                            title: "¡Pedido realizado con éxito!",
                            description: `Gracias por tu compra, ${values.nombre}. Estaremos enviándote más detalles a tu dirección de correo electrónico.`,
                            status: "success",
                            isClosable: true,
                        });

                        clearCart();
                        setOpenDrawer("");
                    }}
                >
                    {({ isValid, dirty, errors, touched, submitForm }) => (
                        <>
                            <DrawerBody>
                                <CartDetails isCheckout />

                                <Box mt={4} borderTop="1px" borderColor="gray.200" pt={4}>
                                    <Text fontSize="lg" mb={4} fontWeight="bold">Detalles del Envío</Text>

                                    <Form>
                                        <FormField
                                            id="nombre"
                                            label="Nombre"
                                            placeholder="Ingresá tu nombre"
                                            type="text"
                                            errors={errors}
                                            touched={touched}
                                        />
                                        <FormField
                                            id="correo"
                                            label="Correo Electrónico"
                                            placeholder="Ingresá tu correo electrónico"
                                            type="correo"
                                            errors={errors}
                                            touched={touched}
                                        />
                                        <FormField
                                            id="direccion"
                                            label="Dirección"
                                            placeholder="Ingresá la dirección"
                                            type="text"
                                            errors={errors}
                                            touched={touched}
                                        />
                                        <FormField
                                            id="codigoPostal"
                                            label="Código Postal"
                                            placeholder="Ingresá el código postal"
                                            type="text"
                                            errors={errors}
                                            touched={touched}
                                        />
                                        <FormField
                                            id="localidad"
                                            label="Localidad"
                                            placeholder="Ingresá la localidad"
                                            type="text"
                                            errors={errors}
                                            touched={touched}
                                        />
                                    </Form>
                                </Box>
                            </DrawerBody>

                            <DrawerFooter>
                                <Button
                                    colorScheme="green"
                                    size="lg"
                                    flex="1"
                                    isDisabled={!isValid || !dirty}
                                    onClick={submitForm}
                                >
                                    Realizar Pedido
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </Formik>
            </DrawerContent>
        </Drawer>
    );
}

export default CheckoutDrawer;