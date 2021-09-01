window.addEventListener('DOMContentLoaded', (event) =>{
    createInnerHtml();
})

const createInnerHtml = () => {
    const innerHtml = `
    <table> 
           <tr>
            <td><img class="profile" alt="" src="../Assests/Ellipse -1.png"> </td>
            <td>Meghna Borkar</td>
            <td>Female</td>
            <td><div class ='dept-label'> HR</div><div class = 'dept-label'>Finance</div>
                <td> 3000000 </td>
                <td> 1 Nov 2020 </td> 
            </td>
            <td> 
            <img id="1" onclick="remove(this)" alt="delete" src="../Assests/delete-black-18dp.svg">
            <img id="1" onclick="update(this)" alt="edit" src="../Assests/create-black-18dp.svg">
        </td>
      </tr>
      </table>`;
      

      document.querySelector('#table-display').innerHTML = innerHtml;
    
   
}