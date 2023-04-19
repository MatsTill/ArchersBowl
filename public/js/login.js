//For Logging In Existing Users

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector("#loginForm");

    loginBtn?.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Check if email and password fields are not empty
        const emailField = document.querySelector("#email");
        const passwordField = document.querySelector("#password");
        if (emailField.value.trim() === "" || passwordField.value.trim() === "") {
            alert("Please enter both email and password");
            return;
        }

        try {
            const response = await fetch("/checkAccount", {
                method: "POST",
                body: JSON.stringify({
                    email: emailField.value,
                    password: passwordField.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                window.location.replace("/homepage");
            } else {
                const error = await response.text();
                alert(error);
            }
        } catch (error) {
            console.error(error);
        }
        
    })
});
