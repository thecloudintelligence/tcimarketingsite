
  document.querySelectorAll('.faq-question').forEach(function(question) {
      question.addEventListener('click', function() {
          var answer = this.nextElementSibling;
          var icon = this.querySelector('.toggle-icon');
          var faqSection = answer.closest('.faq-item');
          var faqQuestion = this.querySelector('.div-194');

          answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
          icon.src = (answer.style.display === 'block') ? './img/minus-icon.png' : './img/plus-icon.png';
          
          if (faqSection) {
              if (answer.style.display === "block") {
                  faqSection.classList.add("active");
                  faqQuestion.classList.add("active");
              } else {
                  faqSection.classList.remove("active");
                  faqQuestion.classList.remove("active");
              }
          }
      });
  });


const allAnswers = document.querySelectorAll('.div-94');
    

    for (let i = 1; i < allAnswers.length; i++) {
        allAnswers[i].style.display = 'none';
    }

    document.querySelectorAll('.div-93').forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;

         
            document.querySelectorAll('.div-94').forEach(function(otherAnswer) {
                if (otherAnswer !== answer && otherAnswer.style.display === 'block') {
                    otherAnswer.style.display = 'none';
                }
            });

            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        });
    });