import { Box } from "@mantine/core";
import { Manrope } from "@next/font/google";
import type { Dispatch, SetStateAction } from "react";

const manrope = Manrope({ subsets: ["latin"] });

const ExampleItem = ({
  children,
  onClick,
  setOriginalText,
}: {
  children: string;
  onClick: (text: string) => Promise<void>;
  setOriginalText: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Box
      onClick={async () => {
        setOriginalText(children);
        await onClick(children);
      }}
      sx={(theme) => ({
        borderRadius: theme.radius.lg,
        border: `1px solid ${theme.colors.gray[7]}`,
        padding: theme.spacing.sm,
        marginBottom: theme.spacing.sm,
        cursor: "pointer",
      })}
      className={manrope.className}
    >
      {children}
    </Box>
  );
};

export default ExampleItem;
