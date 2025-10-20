const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileElem");
const fileList = document.getElementById("file-list");

// Impede comportamento padrão
;["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
    dropArea.addEventListener(eventName, e => e.preventDefault());
    dropArea.addEventListener(eventName, e => e.stopPropagation());
});

// Estilo visual ao arrastar
;["dragenter", "dragover"].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.add("highlight"));
});
;["dragleave", "drop"].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.remove("highlight"));
});

// Clique abre seletor de arquivos
dropArea.addEventListener("click", () => fileInput.click());

// Drop de arquivo
dropArea.addEventListener("drop", e => {
    const files = e.dataTransfer.files;
    handleFiles(files);
});

// Seleção via input normal
fileInput.addEventListener("change", () => {
    handleFiles(fileInput.files);
});

// Função de manipulação
function handleFiles(files) {
    fileList.innerHTML = "";
    [...files].forEach(file => {
        const li = document.createElement("p");
        li.textContent = `📂 ${file.name} (${Math.round(file.size / 1024)} KB)`;
        fileList.appendChild(li);
    });
}
