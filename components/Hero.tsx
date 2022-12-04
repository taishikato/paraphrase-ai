import { Box, Text, Title } from "@mantine/core";
import { Manrope } from "@next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const Hero = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto" }} pt={50} pb={70}>
      <Title
        order={1}
        className={manrope.className}
        sx={(theme) => ({
          fontWeight: 900,
          textAlign: "center",
          color: theme.colors.gray[2],
        })}
        size={64}
      >
        Find a{" "}
        <Text
          className={manrope.className}
          component="span"
          variant="gradient"
          gradient={{ from: "yellow", to: "pink", deg: 45 }}
        >
          wow
        </Text>{" "}
        text and{" "}
        <Text
          className={manrope.className}
          component="span"
          variant="gradient"
          gradient={{ from: "pink", to: "blue", deg: 45 }}
        >
          tweak
        </Text>{" "}
        it
      </Title>
      <Title
        order={3}
        className={manrope.className}
        sx={(theme) => ({
          fontWeight: 500,
          textAlign: "center",
          color: theme.colors.gray[2],
        })}
        // size={64}
      >
        The paraphrasing tool for web content that wows
      </Title>
    </Box>
  );
};

export default Hero;
