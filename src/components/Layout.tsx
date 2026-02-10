import { AppShell, Burger, Group, NavLink, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLayoutDashboard } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text size="xl" fw={700}>Warehouse Manager</Text>
        </Group>
      </AppShell.Header>



      <AppShell.Navbar p="md">
        <NavLink
            component={Link as any}
            to="/"
            label="Options"
            leftSection={<IconLayoutDashboard size="1rem" stroke={1.5} />}
            active
        />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
