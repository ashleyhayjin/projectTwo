const newFormHandler = async (event) => {
    event.preventDefault();
  
    const joke_text = document.querySelector('#joke-content').value.trim();
    const category_name = document.querySelector('#inputState').value;
    console.log(category_name);
    if(joke_text && category_name ){
        const response = await fetch(`/api/jokes`, {
            method: 'POST',
            body: JSON.stringify({ joke_text, category_name }),
            headers: {'Content-Type': 'application/json',},
      });
      if (response.ok)  {
         document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
    
};
document.querySelector('#new-joke-form').addEventListener('submit', newFormHandler);
  