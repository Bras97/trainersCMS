export default function() {
  return [
    {
      title: "Profil trenera",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Posty",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Nowy post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Cenniki",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-tariff",
    },
    {
      title: "Wydarzenia",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-event",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    }
  ];
}
