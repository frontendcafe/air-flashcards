import type { NextPage } from "next";

import Button from "@/modules/shared/components/buttons/button";
import { Container, Stack } from "@chakra-ui/react";

const ButtonsDemo: NextPage = () => {
  return (
    <Container maxW="6xl" style={{ marginTop: 40 }}>
      <Stack gap={10}>
        <h1 style={{ fontWeight: 600, fontSize: 20, textAlign: "center" }}>Buttons Demo</h1>

        <Stack gap={2}>
          <p style={{ borderBottom: "1px solid #eee" }}>Normal</p>
          <Stack gap={2} direction="row">
            <Button size="sm" />
            <Button size="md" />
            <Button size="lg" />
          </Stack>
        </Stack>

        <Stack gap={2}>
          <p style={{ borderBottom: "1px solid #eee" }}>Light</p>
          <Stack gap={2} direction="row">
            <Button light size="sm" />
            <Button light size="md" />
            <Button light size="lg" />
          </Stack>
        </Stack>

        <Stack gap={2}>
          <p style={{ borderBottom: "1px solid #eee" }}>Light Outlined</p>
          <Stack gap={2} direction="row">
            <Button light outline size="sm" />
            <Button light outline size="md" />
            <Button light outline size="lg" />
          </Stack>
        </Stack>

        <Stack gap={2}>
          <p style={{ borderBottom: "1px solid #eee" }}>Light Disabled</p>
          <Stack gap={2} direction="row">
            <Button light disabled outline={false} size="sm" />
            <Button light disabled outline={false} size="md" />
            <Button light disabled outline={false} size="lg" />
          </Stack>
        </Stack>

        <Stack gap={2}>
          <p style={{ borderBottom: "1px solid #eee" }}>Light Outlined Disabled</p>
          <Stack gap={2} direction="row">
            <Button light disabled outline size="sm" />
            <Button light disabled outline size="md" />
            <Button light disabled outline size="lg" />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ButtonsDemo;
