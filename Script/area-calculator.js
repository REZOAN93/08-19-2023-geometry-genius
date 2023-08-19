function getInputElementById(elementId) {
  const inputField = document.getElementById(elementId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
}

function setTextById(elementId, newValue) {
  const textFields = document.getElementById(elementId);
  textFields.innerText = newValue;
}

function updatedCalculatedData(areaType,area) {
  const CalculatedField = document.getElementById("calculated-area");
  const headerData=document.getElementById(areaType).innerText
  const info=document.getElementById(area).innerText
  const p = document.createElement("p");
  const count=CalculatedField.childElementCount
  p.innerHTML = `${count}. ${headerData} ${info} cm<sup>2</sup> <button class="btn btn-sm bg-btn-color hover:bg-btn-color text-white">Convert</button>`;
  CalculatedField.appendChild(p);
}

function getCalculatedValuebyId(elementId1, elementId2, setfield) {
  const firstInputValue = getInputElementById(elementId1);
  const secondInputValue = getInputElementById(elementId2);
  const areaValue = 0.5 * firstInputValue * secondInputValue;
  if (isNaN(firstInputValue) && isNaN(secondInputValue)) {
    alert("Please provide a valid number");
    return;
  }
  setTextById(setfield, areaValue);
  
}
function getCalculatedbyId(elementId1, elementId2, setfield) {
  const firstInputValue = getInputElementById(elementId1);
  const secondInputValue = getInputElementById(elementId2);
  const areaValue = firstInputValue * secondInputValue;
  if (isNaN(firstInputValue) && isNaN(secondInputValue)) {
    alert("Please provide a valid number");
    return;
  }
  setTextById(setfield, areaValue);
  console.log(areaValue);
}

function handleCalculateBtn() {
  getCalculatedValuebyId(
    "firstValueTriangle",
    "secondValueTriangle",
    "area-field"
  );
  updatedCalculatedData('trianglehead','area-field');
}
function handleRactangleBtn() {
  getCalculatedValuebyId(
    "firstValueRactangel",
    "SecondValueRactangel",
    "area-field1"
  );
  updatedCalculatedData('rectanglehead','area-field1');
}
function handleparallelogrambtn() {
  getCalculatedbyId("firstValueparalle", "secondValueparalle", "area-field2");
  updatedCalculatedData('parallelogramHead','area-field2');
}
function handlerhombusbtn() {
  getCalculatedValuebyId(
    "firstValuerhombus",
    "secondValuerhombus",
    "area-field3"
  );
  updatedCalculatedData('rhombusTitle','area-field3');
}
function handlePentagonBtn() {
  getCalculatedValuebyId("pentagon1", "pentagon2", "area-field4");
  updatedCalculatedData('pentagon','area-field4');
}
function handleEllipseBtn() {
  getCalculatedValuebyId("ellipse1", "ellipse2", "area-field5");
  updatedCalculatedData('ellipsehead','area-field5');
}
