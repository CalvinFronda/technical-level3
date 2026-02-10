import {
  ActionIcon,
  Badge,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

// Hardcoded data for demonstration
const product = {
  id: 1,
  title: "Handmade Fresh Table",
  price: 687,
  description: "Andy shoes are designed to keeping in...",
  category: {
    id: 5,
    name: "Others",
    image: "https://placehold.co/600x400",
  },
  images: [
    "https://placehold.co/600x400?text=Image+1",
    "https://placehold.co/600x400?text=Image+2",
    "https://placehold.co/600x400?text=Image+3",
  ],
};

export const ProductDetails = () => {
  // TODO: Get product ID from URL

  // TODO: Fetch product details

  return (
    <Container my="md">
      <ActionIcon component={Link} to="/" variant="subtle" mb="md">
        <IconArrowLeft />
      </ActionIcon>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            src={product.images[0]}
            radius="md"
            alt={product.title}
            h={400}
            w="100%"
            fit="cover"
            mb="sm"
          />
          <SimpleGrid cols={3}>
            {product.images.map((img, index) => (
              <Image key={index} src={img} radius="sm" h={80} fit="cover" />
            ))}
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Group justify="space-between" align="center">
            <Badge size="lg" variant="filled" color="blue">
              {product.category.name}
            </Badge>
            <Text size="xl" fw={700} c="blue">
              ${product.price}
            </Text>
          </Group>

          <Title order={1} mt="xs">
            {product.title}
          </Title>

          <Text c="dimmed" mt="md">
            {product.description}
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
