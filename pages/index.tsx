import { Box, Button, Textarea, Text, Paper, Skeleton } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Manrope } from "@next/font/google";
import ExampleItem from "../components/ExampleItem";
import Footer from "../components/Footer";
import { showNotification } from "@mantine/notifications";

const manrope = Manrope({ subsets: ["latin"] });

const Home: NextPage = () => {
  const router = useRouter();
  const text = router.query.text as string;

  const [loading, setLoading] = useState(false);
  const [originalText, setOriginalText] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const getParaphrasedText = async (text: string) => {
    setResult(null);
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}?text=${text}`
      ).then((res) => res.json());
      setResult(response[0].text);
    } catch (err) {
      showNotification({
        title: "Bummer!",
        message: "An error occurred...please try it again later.",
        color: "red",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setOriginalText(text ?? "");
  }, [text]);

  return (
    <>
      <Box px={10} mb={80}>
        <Hero />
        <Box
          sx={{
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <Box mb={40}>
            <Text
              component="h2"
              className={manrope.className}
              size={25}
              sx={(theme) => ({ marginBottom: theme.spacing.md })}
            >
              Try examples
            </Text>
            <ExampleItem
              onClick={getParaphrasedText}
              setOriginalText={setOriginalText}
            >
              The platform for frontend developers, providing the speed and
              reliability innovators need to create at the moment of
              inspiration.
            </ExampleItem>
            <ExampleItem
              onClick={getParaphrasedText}
              setOriginalText={setOriginalText}
            >
              We&apos;re building a new path for the world&apos;s best builders
              to come together, explore promising domains and ship meaningful
              products.
            </ExampleItem>
            <ExampleItem
              onClick={getParaphrasedText}
              setOriginalText={setOriginalText}
            >
              Supercharge your writing with the most advanced AI writing
              assistant.
            </ExampleItem>
          </Box>
          <Box
            component="form"
            mb={30}
            onSubmit={async (e) => {
              e.preventDefault();

              await getParaphrasedText(originalText);
            }}
          >
            <Textarea
              placeholder="Take a great headline from a landing page of a cool app"
              label="Original texts"
              radius="md"
              size="lg"
              onChange={(e) => setOriginalText(e.target.value)}
              value={originalText}
            />
            <Box sx={{ textAlign: "center" }} mt={20}>
              <Button
                disabled={originalText.replace(/ /g, "") === ""}
                variant="gradient"
                gradient={{ from: "violet", to: "#ec8c69", deg: 35 }}
                color="violet"
                radius="md"
                size="lg"
                loading={loading}
                type="submit"
                sx={{ textAlign: "center" }}
              >
                Paraphrase
              </Button>
            </Box>
          </Box>

          {loading && (
            <>
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} radius="xl" mt={6} />
              <Skeleton height={8} radius="xl" mt={6} />
              <Skeleton height={8} radius="xl" mt={6} />
              <Skeleton height={8} radius="xl" mt={6} />
            </>
          )}

          {result && (
            <Box>
              <Paper shadow="md" radius="md" p="md">
                <Text>{result}</Text>
              </Paper>
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
