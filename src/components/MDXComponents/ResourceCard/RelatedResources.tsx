import { Box, Stack } from "@mui/material";

export function RelatedResources({ children }: React.PropsWithChildren<{}>) {
  return (
    <Box component="section" sx={{ maxWidth: 800 }}>
      <Stack spacing={2}>{children}</Stack>
    </Box>
  );
}
