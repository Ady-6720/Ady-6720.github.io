var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        document.getElementById(tabname).classList.add("active-tab");
        event.currentTarget.classList.add("active-link");
    }
    const textElement = document.querySelector(".typing-text");
        const text = textElement.innerText;
        let index = 0;
        let isTyping = true;

        function type() {
            if (isTyping) {
                textElement.innerText = text.slice(0, index);
                index++;
                if (index > text.length) {
                    isTyping = false;
                    setTimeout(type, 100); // Pause for 1 second after typing
                } else {
                    setTimeout(type, 10); // Adjust the typing speed as needed
                }
            } else {
                textElement.innerText = text.slice(0, index);
                index--;
          
            }
        }

        type();
        window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
});