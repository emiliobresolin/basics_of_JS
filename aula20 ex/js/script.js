function myScope()
{
    const form=document.querySelector('.form');
    const result = document.querySelector('.result');
    const people = [];

    function receveEventForm (event)
    {
        event.preventDefault();
        const name = form.querySelector('.name');
        const email = form.querySelector('.email');
        const company = form.querySelector('.company');
        console.log(name.value, email.value, company.value);
        people.push({
            name: name.value,
            email: email.value,
            company: company.value
        });
        console.log(people);

        result.innerHTML += `<p>${name.value} ${email.value} ${company.value}`
    }
    form.addEventListener('submit', receveEventForm);
    
        /* OR you could do it like this:
    function myScope()
    {
        function myScope()
    {
        const form=document.querySelector('.form');
        form.onsubmit = function (evento)
    {
        evento.preventDefault();
        alert(1);
    };
    */
}
myScope();