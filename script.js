document.addEventListener('DOMContentLoaded', () => {
    // Tratamento de Modais
    const fabBtn = document.getElementById('fab-add-task');
    const modalAdd = document.getElementById('modal-add-task');
    const btnCancel = document.getElementById('btn-cancel-task');

    if (fabBtn && modalAdd) {
        fabBtn.addEventListener('click', () => {
            modalAdd.classList.add('active');
        });
    }

    if (btnCancel && modalAdd) {
        btnCancel.addEventListener('click', (e) => {
            e.preventDefault();
            modalAdd.classList.remove('active');
        });
    }

    if (modalAdd) {
        modalAdd.addEventListener('click', (e) => {
            if (e.target === modalAdd) {
                modalAdd.classList.remove('active');
            }
        });
    }

    // Simulação de check em tarefas
    const checkBoxes = document.querySelectorAll('.checkbox');
    checkBoxes.forEach(box => {
        box.addEventListener('click', (e) => {
            e.preventDefault(); 
            const card = box.closest('.task-card');
            if(card) {
                card.classList.toggle('completed');
                if(card.classList.contains('completed')) {
                    box.innerHTML = `<svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5L5 9L13 1" stroke="#0B0910" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
                } else {
                    box.innerHTML = '';
                }
            }
        });
    });
});
