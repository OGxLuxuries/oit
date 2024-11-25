import { IconChevronDown } from "@tabler/icons-react";
import { Burger, Center, Container, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

// these links are my topnav pages, the objects within an object are my dropdowns
const links = [
  {
    link: "#1",
    label: "Degrees",
    links: [
      { link: "/degrees", label: "See Degrees" },
      { link: "/minors", label: "See Minors" },
    ],
  },
  { link: "#employment", label: "Employment", links: [
    {link: "/employment", label: "See Outcomes"},
    {link: "/map", label: "See Map"},
    
  ]},
  { link: "/team", label: "Our Team" },
  {
    link: "#3",
    label: "More",
    links: [
      { link: "/research", label: "Research" },
      { link: "/resources", label: "Resources" },
      { link: "/news", label: "News" },
    ],
  },
  { link: "/enroll", label: "Enroll" },
  
  
  
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <Link to={item.link}>{item.label}</Link>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal={false}
        >
          <Menu.Target>
            <Link to={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      
        <Link to={link.link} className={classes.link} key={link.label}>
          {link.label}
        </Link>
     
    );
  });

  return (
    <div className={classes.moveToFront}>
      <header className={classes.header}>
        <Container size="xl">
          <div className={classes.inner}>
            <Link to="/" className={classes.oitFlex}>
              <img src="/images/logo.png" alt="oit-logo" width={50} />
              <h1>OIT</h1>
            </Link>
            <Group gap={5} visibleFrom="sm">
              {items}
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            />
          </div>
        </Container>
      </header>
    </div>
  );
}
