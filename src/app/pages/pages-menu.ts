import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS_ADMIN_MANAGER: NbMenuItem[] = [
  // {
  //   title: "Accueil",
  //   icon: "pie-chart-outline",
  //   link: "/pages/dashboardGlobal/dashboardGlobal",
  // },

  {
    title: "Responsable Admnistration",
    group: true,
  },

  //profile

  {
    title: "STAFF",
    icon: "person-outline",

    children: [
      {
        title: "Ajouter Employer",
        link: "/pages/profile/add-profile",
        icon: "person-add-outline",
      },
      {
        title: "Liste des Employers",
        link: "/pages/profile/list-profile",
        icon: "people-outline",
      },
    ],
  },
  {
    title: "Client",
    icon: "person-outline",
    children: [
      {
        title: "Ajouter client / société",
        link: "/pages/tableClient/choices",
        icon: "person-add-outline",
      },
      {
        title: "Liste des clients",
        link: "/pages/tableClient/table-user",
        icon: "people-outline",
      },
      {
        title: "Liste des sociétées",
        link: "/pages/tableClient/table-company",
        icon: "briefcase-outline",
        home: true,
      },
    ],
  },

  {
    title: "Demande d'intervention",
    icon: "file-text-outline",
    children: [
      {
        title: "Creation des DI",
        link: "/pages/ticket/add-ticket",
        icon: "file-add-outline",
      },
      {
        title: "Listes des DI",
        link: "/pages/ticket/ticket-list",
        icon: "folder-outline",
      },
      {
        title: "DI consulté cordinateur",
        link: "/pages/ticket/ticket-list-traiter",
        icon: "clipboard-outline",
      },
    ],
  },
];

export const MENU_ITEMS_ADMIN_TECH: NbMenuItem[] = [
  // {
  //   title: "Accueil",
  //   icon: "pie-chart-outline",
  //   link: "/pages/dashboardGlobal/dashboardGlobal",
  //   home: true,
  // },

  {
    title: "Responsable Technique",
    group: true,
  },
  {
    title: "STAFF",
    icon: "person-outline",
    children: [
      {
        title: "Liste des clients",
        link: "/pages/profile/list-profile",
        icon: "people-outline",
      },
    ],
  },
  {
    title: "Client",
    icon: "person-outline",
    children: [
      {
        title: "Liste des clients",
        link: "/pages/tableClient/table-user",
        icon: "people-outline",
      },
      {
        title: "Liste des sociétées",
        link: "/pages/tableClient/table-company",
        icon: "briefcase-outline",
      },
    ],
  },

  {
    title: "Ticket",
    icon: "file-text-outline",
    children: [
      {
        title: "Listes des DI",
        link: "/pages/ticket/ticket-list",
        icon: "folder-outline",
        home: true,
      },
      // {
      //   title: "DI consulté cordinateur",
      //   link: "/pages/ticket/ticket-list-traiter",
      //   icon: "clipboard-outline",
      // },
    ],
  },
];

export const MENU_ITEMS_MANAGER: NbMenuItem[] = [
  // {
  //   title: "Accueil",
  //   icon: "pie-chart-outline",
  //   link: "/pages/dashboardGlobal/dashboardGlobal",
  //   home: true,
  // },

  {
    title: "Admnistration",
    group: true,
  },

  {
    title: "Client",
    icon: "person-outline",
    children: [
      {
        title: "Ajouter client / société",
        link: "/pages/tableClient/choices",
        icon: "person-add-outline",
      },
      {
        title: "Liste des clients",
        link: "/pages/tableClient/table-user",
        icon: "people-outline",
        home: true,
      },
      {
        title: "Liste des sociétées",
        link: "/pages/tableClient/table-company",
        icon: "briefcase-outline",
      },
    ],
  },

  {
    title: "Demande d'intervention",
    icon: "file-text-outline",
    children: [
      {
        title: "Creation des DI",
        link: "/pages/ticket/add-ticket",
        icon: "file-add-outline",
      },
      {
        title: "Listes des DI",
        link: "/pages/ticket/ticket-list",
        icon: "folder-outline",
      },
      {
        title: "DI consulté cordinateur",
        link: "/pages/ticket/ticket-list-traiter",
        icon: "clipboard-outline",
      },
    ],
  },
];

export const MENU_ITEMS_MAGASIN: NbMenuItem[] = [
  // {
  //   title: "Accueil",
  //   icon: "pie-chart-outline",
  //   link: "/pages/dashboardGlobal/dashboardGlobal",
  //   home: true,
  // },

  {
    title: "Responsable Magasin",
    group: true,
  },

  {
    title: "Client",
    icon: "person-outline",
    children: [
      {
        title: "Liste des clients",
        link: "/pages/tableClient/table-user",
        icon: "people-outline",
      },
      {
        title: "Liste des sociétées",
        link: "/pages/tableClient/table-company",
        icon: "briefcase-outline",
      },
    ],
  },

  {
    title: "Ticket",
    icon: "file-text-outline",
    children: [
      {
        title: "List tickets",
        link: "/pages/ticket/ticket-list",
        home: true,
      },
    ],
  },
];

export const MENU_ITEMS_TECH: NbMenuItem[] = [
  // {
  //   title: "Accueil",
  //   icon: "pie-chart-outline",
  //   link: "/pages/dashboardGlobal/dashboardGlobal",
  //
  // },

  {
    title: "Technicien",
    group: true,
  },

  {
    title: "Client",
    icon: "person-outline",
    children: [
      {
        title: "Liste des clients",
        link: "/pages/tableClient/table-user",
        icon: "people-outline",
      },
      {
        title: "Liste des sociétées",
        link: "/pages/tableClient/table-company",
        icon: "briefcase-outline",
      },
    ],
  },

  {
    title: "Ticket",
    icon: "file-text-outline",
    children: [
      {
        title: "Listes des DI",
        link: "/pages/ticket/ticket-list",
        icon: "folder-outline",
        home: true,
      },
    ],
  },
];

export const MENU_ITEMS_COORDINATOR: NbMenuItem[] = [
  // {
  //   title: "Accueil",
  //   icon: "pie-chart-outline",
  //   link: "/pages/dashboardGlobal/dashboardGlobal",
  //   home: true,
  // },

  {
    title: "Coordinatrice",
    group: true,
  },

  {
    title: "Client",
    icon: "person-outline",
    children: [
      {
        title: "Liste des clients",
        link: "/pages/tableClient/table-user",
        icon: "people-outline",
      },
      {
        title: "Liste des sociétées",
        link: "/pages/tableClient/table-company",
        icon: "briefcase-outline",
      },
    ],
  },

  {
    title: "Demande d'intervention",
    icon: "file-text-outline",
    children: [
      {
        title: "Listes des DI",
        link: "/pages/ticket/ticket-list",
        icon: "folder-outline",
      },
      {
        title: "DI consulté cordinateur",
        link: "/pages/ticket/coordinator",
        icon: "clipboard-outline",
      },
    ],
  },
];
