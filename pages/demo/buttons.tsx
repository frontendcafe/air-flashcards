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
            <Button
              onClick={() => {
                alert("Click");
              }}
              size="sm"
            >
              Button
            </Button>
            <Button
              onClick={() => {
                alert("Click");
              }}
              size="md"
            >
              Button
            </Button>
            <Button
              onClick={() => {
                alert("Click");
              }}
              size="lg"
            >
              Button
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <p style={{ borderBottom: "1px solid #eee" }}>Light</p>
          <Stack gap={2} direction="row">
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              size="sm"
            >
              Button
            </Button>
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              size="md"
            >
              Button
            </Button>
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              size="lg"
            >
              Button
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <p style={{ borderBottom: "1px solid #eee" }}>Light Outlined</p>
          <Stack gap={2} direction="row">
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              outline
              size="sm"
            >
              Button
            </Button>
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              outline
              size="md"
            >
              Button
            </Button>
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              outline
              size="lg"
            >
              Button
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <p style={{ borderBottom: "1px solid #eee" }}>Light Disabled</p>
          <Stack gap={2} direction="row">
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              disabled
              size="sm"
            >
              Button
            </Button>
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              disabled
              size="md"
            >
              Button
            </Button>
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              disabled
              size="lg"
            >
              Button
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <p style={{ borderBottom: "1px solid #eee" }}>Light Outlined Disabled</p>
          <Stack gap={2} direction="row">
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              disabled
              outline
              size="sm"
            >
              Button
            </Button>
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              disabled
              outline
              size="md"
            >
              Button
            </Button>
            <Button
              onClick={() => {
                alert("Click");
              }}
              light
              disabled
              outline
              size="lg"
            >
              Button
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ButtonsDemo;
