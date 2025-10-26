import React, { useState, useMemo } from "react";
import { View, TextInput, Text, Button, Pressable, Keyboard } from "react-native";

export default function LoginScreen() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Invalid email";
    if (values.password.length < 6) e.password = "Min 6 chars";
    return e;
  }, [values]);

  const handleChange = (name) => (text) =>
    setValues((v) => ({ ...v, [name]: text }));

  const handleBlur = (name) => () =>
    setTouched((t) => ({ ...t, [name]: true }));

  const canSubmit = Object.keys(errors).length === 0 && values.email && values.password;

  const onSubmit = async () => {
    setSubmitting(true);
    try {
      // api.login(values.email, values.password)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Email"
        value={values.email}
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        style={{ borderWidth: 1, borderColor: touched.email && errors.email ? "red" : "#ccc", padding: 12, borderRadius: 8, marginBottom: 6 }}
      />
      {touched.email && errors.email ? <Text style={{ color: "red" }}>{errors.email}</Text> : null}

      <TextInput
        placeholder="Password"
        value={values.password}
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        secureTextEntry
        textContentType="password"
        style={{ borderWidth: 1, borderColor: touched.password && errors.password ? "red" : "#ccc", padding: 12, borderRadius: 8, marginTop: 12, marginBottom: 6 }}
      />
      {touched.password && errors.password ? <Text style={{ color: "red" }}>{errors.password}</Text> : null}

      <Button title={submitting ? "Submitting..." : "Login"} disabled={!canSubmit || submitting} onPress={onSubmit} />
    </Pressable>
  );
}
