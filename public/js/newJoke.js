const newFormHandler = async (event) => {
    event.preventDefault();
  
    const joke_text = document.querySelector('#joke-content').value.trim();
    const categoryinfo = document.querySelector('#inputState');
    const category_name = categoryinfo.value;
    let category_id='';
    switch (category_name){
        case 'Food':
            category_id = 1;
            break;
        case 'Developer':
            category_id = 2;
            break;
        case 'Weird':
            category_id = 3;
            break;
        case 'Old':
            category_id = 4;
            break;
        case 'Cool':
            category_id = 5;
            break;
        case 'Dad Jokes':
            category_id = 6;
            break;     
        default: null
    }
    console.log(category_id);
    
    if(joke_text && category_id ){
        const response = await fetch(`/api/jokes`, {
            method: 'POST',
            body: JSON.stringify({ joke_text, category_id, category_name }),
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
  