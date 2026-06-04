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
import { useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  const [data, setData] = useState([]);

  // const api = "https://api.escuelajs.co/api/v1/products/:id";
  // TODO: Get product ID from URL
  const { id } = useParams({ from: "/products/$id" });
  // console.log(id);

  // TODO: Fetch product details
  const fetchProduct = async () => {
    const API_URL = `https://api.escuelajs.co/api/v1/products/${id}`;
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        console.log("data not fetching");
      }

      const result = response.json();
      setData(result);
      console.log(result);
    } catch (err) {
      console.log("404");
    }
  };

  useEffect(() => {
    // const data = fetchProduct();
    // console.log(data);
    fetchProduct().catch(console.error)

  }, []);

  return (
    <Container my="md">
      <ActionIcon component={Link} to="/" variant="subtle" mb="md">
        <IconArrowLeft />
      </ActionIcon>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            src={data.images[0]}
            radius="md"
            alt={data.title}
            h={400}
            w="100%"
            fit="cover"
            mb="sm"
          />
          <SimpleGrid cols={3}>
            {data.images.map((img, index) => (
              <Image key={index} src={img} radius="sm" h={80} fit="cover" />
            ))}
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Group justify="space-between" align="center">
            <Badge size="lg" variant="filled" color="blue">
              {data.category.name}
            </Badge>
            <Text size="xl" fw={700} c="blue">
              ${data.price}
            </Text>
          </Group>

          <Title order={1} mt="xs">
            {data.title}
          </Title>

          <Text c="dimmed" mt="md">
            {data.description}
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
