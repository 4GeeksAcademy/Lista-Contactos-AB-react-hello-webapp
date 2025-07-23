export const getContacts = async (dispatch, newContact, setNewContact) => {
  const response = await fetch("https://playground.4geeks.com/contact/agendas/anderson_agendas/contacts");
  console.log(response);

  if (!response.ok) {
    console.log("debo crear el contacto");
    await crearContacto(newContact, setNewContact, dispatch);
    return;
  }

  const data = await response.json();
  console.log(data);

  
  dispatch({ type: "set_Contactos", payload: data.contacts });
};


export const crearContacto = async (newContact, setNewContact, dispatch) => {
  const response = await fetch("https://playground.4geeks.com/contact/agendas/anderson_agendas/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: newContact.FullName,
      email: newContact.Email,
      phone: newContact.Phone,
      address: newContact.Address
    })
  });

  if (!response.ok) {
    console.log("Error al crear contacto");
    return;
  }
  const data = await response.json();

  setNewContact({ FullName: "", Email: "", Phone: "", Address: "" });


  dispatch({
    type: "add_contact",
    payload: {
      id: data.id,
      FullName: data.name,
      Email: data.email,
      Phone: data.phone,
      Address: data.address,
      background: "#ffffff"
    }
  });
};

export const editarContacto = async (id, newContact, dispatch, navigate) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/anderson_agendas/contacts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        name: newContact.FullName,
        email: newContact.Email,
        phone: newContact.Phone,
        address: newContact.Address
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