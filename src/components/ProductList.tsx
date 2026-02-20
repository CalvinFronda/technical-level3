import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
} from "@mantine/core";

import { Link } from "@tanstack/react-router";
import { useProducts } from "../hooks/useProducts";
import { useQueries } from "@tanstack/react-query";

const products = [
  {
    id: 23,
    title: "Sleek Modern Laptop with Ambient Lighting",
    slug: "sleek-modern-laptop-with-ambient-lighting",
    price: 43,
    description:
      "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
    category: {
      id: 2,
      name: "Electronics",
      slug: "electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2026-02-06T07:46:10.000Z",
      updatedAt: "2026-02-06T07:46:10.000Z",
    },
    images: [
      "https://i.imgur.com/OKn1KFI.jpeg",
      "https://i.imgur.com/G4f21Ai.jpeg",
      "https://i.imgur.com/Z9oKRVJ.jpeg",
    ],
    creationAt: "2026-02-06T07:46:10.000Z",
    updatedAt: "2026-02-06T07:46:10.000Z",
  },
];

export const ProductList = () => {
  // TODO: use the useProducts hook to fetch the data
  const {data} = useProducts();

  
  console.log(data);
  return (
    <div className="p-5">
      <SimpleGrid cols={{ base: 1, sm: 3, lg: 5 }} spacing="xl">
        {data.data.map((product: any) => (
          <Card
            key={product.id}
            shadow="sm"
            padding="sm"
            radius="md"
            withBorder
          >
            <Card.Section>
              <Image
                src={product.images[0]}
                height={160}
                alt={product.title}
                fallbackSrc="https://placehold.co/600x400?text=No+Image"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{product.title}</Text>
              <Badge color="pink" variant="light">
                ${product.price}
              </Badge>
            </Group>

            <Text size="sm" c="dimmed" lineClamp={2}>
              {product.description}
            </Text>

            <Button
              component={Link}
              to="/products/$id"
              params={{ id: product.id.toString() } as any}
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              View Details
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};
