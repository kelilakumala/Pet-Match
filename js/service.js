console.log('connected');

document.getElementById("filter").addEventListener("change", handleFilterChange);

function handleFilterChange() {
    var selectElement = document.getElementById("filter");
    var selectedValue = selectElement.value;

    var vet = document.getElementById('vet-scroll');
    var shelter = document.getElementById('shelter-scroll');
    var hotel = document.getElementById('hotel-scroll');

    if (selectedValue === "1") {
        console.log('vet');
        vet.style.display = 'block';
        shelter.style.display = 'none';
        hotel.style.display = 'none';
    } else if (selectedValue === "2") {
        console.log('shelter');
        vet.style.display = 'none';
        shelter.style.display = 'block';
        hotel.style.display = 'none';
    } else if (selectedValue === "3") {
        console.log('hotel');
        vet.style.display = 'none';
        shelter.style.display = 'none';
        hotel.style.display = 'block';
    }
}
