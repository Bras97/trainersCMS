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
    }
  ];
}
