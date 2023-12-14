function show() {
    fetch("https://reqres.in/api/users").then(response => response.json()).then(finalResponse => {console.log(finalResponse.data);display_users(finalResponse.data);}).catch(error => {console.log("Error Occurred:", error);});}

        let root_element = document.getElementById("root");

        function display_users(users) {
            root_element.textContent = "";

            users.forEach((user) => {
                let card = document.createElement("div");
                card.className = "user";

                let avatar = document.createElement("img");
                avatar.src = user.avatar;

                let name = document.createElement("p");
                name.textContent = `NAME : ${user.first_name}  ${user.last_name}`;

                let email = document.createElement("p");
                email.textContent = `Email : ${user.email}`;

                card.appendChild(avatar);
                card.appendChild(name);
                card.appendChild(email);

                root_element.appendChild(card);
            });
        }