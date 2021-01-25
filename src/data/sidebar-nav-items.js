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
      to: "/posts-list",
    },
    {
      title: "Cenniki",
      htmlBefore: '<i class="material-icons">money</i>',
      to: "/tariffs-list",
    },
    {
      title: "Wydarzenia",
      htmlBefore: '<i class="material-icons">event</i>',
      to: "/events-list",
    },
    {
      title: "Zgłoszenia",
      htmlBefore: '<i class="material-icons">report</i>',
      to: "/reports-list",
    },
    {
      title: "Użytkownicy",
      htmlBefore: '<i class="material-icons">people</i>',
      to: "/users-list",
    },
    {
      title: "Miasta",
      htmlBefore: '<i class="material-icons">house</i>',
      to: "/cities-list",
    },
    {
      title: "Specjalności",
      htmlBefore: '<i class="material-icons">model_training</i>',
      to: "/faculties-list",
    }
  ];
}
