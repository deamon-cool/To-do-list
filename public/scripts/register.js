let container = document.querySelector('#container');

container.innerHTML = `
<div class="window">
    <h1>Register:</h1>

    <form action="/register/store/user" method="POST">
        <label for="username">User Name:</label>
        <input type="text" name="username" placeholder="User Name">

        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="Password">

        <label for="confirm">Confirm Password:</label>
        <input type="password" name="confirm" placeholder="Confirm Password">

        <div class="row">
            <input type="submit" value="✔">
        </div>
    </form>

    <p class="redirect"><a href="/login">Login...</a></p>

    <p><a href="/register/privacy">Privacy</a></p>
</div>
`;

// DOM
let username = container.querySelector('.window input[name=username]');
let password = container.querySelector('.window input[name=password]');
let passwordConfirm = container.querySelector('.window input[name=confirm]');
let submit = container.querySelector('.window .row input[type=submit]');
let warning = container.querySelector('.window .warning');
