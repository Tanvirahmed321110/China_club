// Open Modal Function
export function openModalF(modalId, btnSelector) {
    const modal = document.getElementById(modalId); // Trim in case of accidental spaces
    const btns = document.querySelectorAll(btnSelector);

    if (!modal) {
        console.error(`Modal with ID "${modalId}" not found.`);
        return;
    }

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.classList.add('active');
        });
    });

}





// close button funciton
export function closeButtonF() {
    const closeButtons = document.querySelectorAll('.modal-close-btn');

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = btn.closest('.my-modal, .all-category'); // Selects the closest matching element

            if (modal) { // Check if a matching ancestor exists
                modal.classList.remove('active');
            }
        });
    });
}


// Sidebar toggle function
export function toggleF(sidebarId, buttonId) {
    const sidebar = document.getElementById(sidebarId);
    const toggleBtn = document.getElementById(buttonId);
    const closeBtn = document.getElementById('close-mobile-sidebar')

    if (!sidebar || !toggleBtn) {
        console.error('Sidebar or Button not found. Check your IDs.');
        return;
    }

    // Add event listener to the button
    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        toggleBtn.classList.toggle('active');

    });

    if (closeBtn) {
        // close menu icon
        closeBtn.addEventListener('click', function () {
            if (sidebar.classList.contains('active')) {
                toggleBtn.classList.remove('active')
            }
            else {
                toggleBtn.classList.add('active')
            }
        })
    }
}




// export function deleteAllF(deleteParent, deleteButtons, deleteItem) {
//     const parent = document.querySelector(deleteParent)
//     if (!parent) return;

//     const buttons = parent.querySelectorAll(deleteButtons)
//     const items = parent.querySelectorAll(deleteItem)


//     buttons.forEach((btn, index) => {
//         btn.addEventListener('click', function () {
//             if (items[index]) {
//                 items[index].remove()
//             }
//         })
//     })
// }







// Base function for updating quantity
export function updateQuantity(inputField, operation) {
    let currentValue = parseInt(inputField.value) || 0;

    // Increment or decrement based on the operation
    if (operation === 'increment' && currentValue < 9) {
        inputField.value = currentValue + 1;
    } else if (operation === 'decrement' && currentValue > 1) {
        inputField.value = currentValue - 1;
    }
}











// delete function
export function deleteF(itemClass, btnsClass) {
    const buttons = document.querySelectorAll(btnsClass)
    buttons.forEach((btn) => {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            const item = btn.closest(itemClass);
            console.log(item)
            if (item) {
                item.remove();
            } else {
                console.warn("No parent item found for this button.");
            }
        });
    });
}

deleteF('.shopping-cart-modal .item', '.shopping-cart-modal .delete-btn')



// quick view
export function quickViewF(buttons) {
    const btns = document.querySelectorAll(buttons)

    if (btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', function (e) {
                const modal = document.querySelector('.qucik-view-modal')

                console.log(modal)
                if (modal) {
                    modal.classList.add('active')
                }
            })
        })
    }
}








// funciton active
export function activeF(selector) {
    const items = document.querySelectorAll(selector)

    items.forEach(item => {
        item.addEventListener('click', function () {
            items.forEach(single => {
                single.classList.remove('active')
            })
            item.classList.add('active')
        })
    })
}







// doropdown
function dropdwonToggle(wrapperId) {
    const wrapper = document.getElementById(wrapperId)
    // const dropdowns = wrapper.querySelectorAll('.dropdwon')

    if (wrapper) {
        const btns = wrapper.querySelectorAll('.nav-btn')

        btns.forEach((btn, index) => {
            btn.addEventListener('click', function () {
                const dropdown = btn.querySelector('.dropdown');
                const icon = btn.querySelector('span')


                // Close all other dropdowns
                btns.forEach(otherBtn => {
                    const otherDropdown = otherBtn.querySelector('.dropdown')
                    const otherIcon = otherBtn.querySelector('span')

                    if (otherDropdown != dropdown) {
                        otherDropdown.classList.remove('active')
                        otherIcon.classList.remove('active')
                    }
                })

                if (dropdown) {
                    // Toggle the 'active' class on the dropdown
                    dropdown.classList.toggle('active');
                    icon.classList.toggle('active')
                }
            })
        })
    }
}








// Tab Function
export function tabF(tabSelector, contentSelector) {

    document.querySelectorAll(tabSelector).forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll(tabSelector).forEach(t => t.classList.remove('active'));
            document.querySelectorAll(contentSelector).forEach(tc => tc.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });
}

// Example Usage
