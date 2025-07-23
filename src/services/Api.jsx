export const getContacts = async (dispatch) => {
  const response = await fetch("https://playground.4geeks.com/contact/agendas/anderson_agendas/contacts");

  if (!response.ok) {
    console.log("Error al obtener contactos");
    dispatch({ type: "set_Contactos", payload: [] });
    return;
  }

  const data = await response.json();
  const contactos = Array.isArray(data.contacts) ? data.contacts : [];
  dispatch({ type: "set_Contactos", payload: contactos });
};

export const crearContacto = async (newContact, setNewContact, dispatch) => {
  const response = await fetch("https://playground.4geeks.com/contact/agendas/anderson_agendas/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: newContact.name,
      email: newContact.email,
      phone: newContact.phone,
      address: newContact.address
    })
  });

  if (!response.ok) {
    console.log("Error al crear contacto");
    return;
  }

  await getContacts(dispatch);
  setNewContact({ name: "", email: "", phone: "", address: "" });
};

export const editarContacto = async (id, newContact, dispatch, navigate) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/anderson_agendas/contacts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        name: newContact.name,
        email: newContact.email,
        phone: newContact.phone,
        address: newContact.address
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  if (response.ok) {
    await getContacts(dispatch);
    navigate("/demo");
  }
};
