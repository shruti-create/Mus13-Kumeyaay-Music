document.addEventListener("DOMContentLoaded", function () {
  const chatMessages = document.getElementById("chatMessages");
  const buttons = document.querySelectorAll(".question-button");

  const qaPairs = [
    // total: 25 questions
    { "question": "What is traditional Native American music known for?", "answer": "Traditional Native American music is known for its emphasis on rhythm through instruments like drums and rattles, as well as melody through singing, chanting, and traditional language patterns." },
    { "question": "Why were songs created and performed within Native American tribes?", "answer": "Songs were created and performed for various reasons, including honoring nature, expressing love, celebrating victories in battles, invoking good harvests, entertaining children with game songs and lullabies, and communicating with the spirits." },
    { "question": "What were some of the prominent instruments used in traditional Native American music?", "answer": "Traditional Native American music incorporated a variety of instruments such as wooden, stone, and clay flutes for melody, and drums, rattles, and rhythm sticks for rhythm." },
    { "question": "How did California Native Americans use singing and dancing to communicate with the spirits?", "answer": "California Native Americans sang and danced to honor their heritage and seek guidance from the spirits. Dances were opportunities to communicate needs, such as successful hunts or good crops, to the spirits." },
    { "question": "What were the musical instruments used by Southern California Indians?", "answer": "Southern California Indians used instruments such as flutes, whistles, rattles, and musical bows. Many of these instruments were crafted from materials like elderberry wood, reeds, turtle shells, bones, and hollow logs." },
    { "question": "Which tribes were prominent in preserving and honoring their languages and music in the San Diego County area?", "answer": "In the San Diego County area, the Kumeyaay, Diegueno, Cahilla, and Luiseno tribes were prominent in preserving and honoring their languages and music. They used various instruments, including stringed ones with one or two strings." },
    { "question": "What are some recommended recordings for exploring Native American music?", "answer": "Some recommended recordings for exploring Native American music include 'Under the Green Corn Moon,' 'Solo Flights,' 'Sacred Spirit,' 'Footprints of Our Ancestors,' and 'Traditional Kumeyaay Music'." },
    { "question": "How can Native American music be integrated into educational lessons?", "answer": "Native American music can be integrated into various educational lessons, such as music appreciation, art, film, geography, and instrument creation, providing students with a well-rounded learning experience." },
    { "question": "How did Native American students and their families contribute to sharing traditional music in the classroom?", "answer": "Native American students and their families often shared their knowledge, heritage, and music in the classroom, offering an authentic and enriching understanding of the original music of the area." },
    { "question": "How did Kumeyaay musical traditions emphasize their connection with nature?", "answer": "Kumeyaay musical traditions often included songs and dances that honored nature and sought harmony with the environment, reflecting their deep connection to the land." },
    { "question": "What were some specific instruments used in Kumeyaay musical performances?", "answer": "Kumeyaay musical performances featured instruments like wooden and bone flutes, rattles made from gourds, turtle shells, and deer hooves, as well as stringed instruments with one or two strings." },
    { "question": "Can you describe the role of gourd rattles in Kumeyaay culture and ceremonies?", "answer": "Gourd rattles held significant importance in Kumeyaay culture and were used in various ceremonies, such as bird singing and dancing, playing a crucial role in providing rhythmic accompaniment." },
    { "question": "How were Kumeyaay gourd rattles made, and what materials were typically used?", "answer": "Kumeyaay gourd rattles were crafted from natural gourds, often accompanied by materials like split tulle sticks, deer and goat claws, and cocoon bunches to create distinct sounds when shaken." },
    { "question": "In what contexts were Kumeyaay flutes and whistles used, and how were they constructed?", "answer": "Kumeyaay flutes and whistles were used for various purposes, including courting. They were made from materials like elderberry wood, reeds, and turtle shells, contributing to the melodic aspects of their music." },
    { "question": "What types of dances were performed in Kumeyaay musical traditions, and how did they contribute to cultural expressions?", "answer": "Kumeyaay dances were diverse and dramatic, often serving as a means to communicate needs and connect with the spirits. These dances played a significant role in preserving cultural heritage." },
    { "question": "How did the Kumeyaay people pass down their musical traditions through generations?", "answer": "Kumeyaay musical traditions were passed down through oral history, with elders playing a crucial role in transmitting knowledge and cultural practices to younger generations." },
    { "question": "What is the significance of music in contemporary Kumeyaay society, and how is it celebrated today?", "answer": "Music continues to hold cultural significance in contemporary Kumeyaay society. It is celebrated through tribal education centers, pow-wows, and gatherings, where traditional songs and dances are performed." },
    { "question": "What is the significance of bird songs in Kumeyaay musical traditions?", "answer": "Bird songs hold great significance in Kumeyaay musical traditions as they served as a means of transmitting important lessons, such as the proper time for young individuals to start families and the necessity for parents to let go of their maturing children." },
    { "question": "How did bird songs play a role in communicating and preserving Kumeyaay cultural values?", "answer": "Bird songs were used allegorically to instruct and imprint cultural values on both children and adults, helping to perpetuate the Kumeyaay lifestyle and traditions over generations." },
    { "question": "How did the arrival of European settlement impact Kumeyaay musical traditions?", "answer": "The arrival of European settlement in the 18th century disrupted Kumeyaay musical traditions and culture. Spanish missionaries attempted to suppress Native American ceremonies, including those with religious significance." },
    { "question": "How did the concept of mutual responsibility play a role in Kumeyaay bird songs?", "answer": "Kumeyaay bird songs expressed the idea of mutual responsibility, emphasizing the interconnectedness of all living beings. The songs reminded individuals of their roles and responsibilities in maintaining life on Earth." },
    { "question": "What materials were used to create rhythm in Kumeyaay bird songs?", "answer": "Unlike many Native American dances, Kumeyaay bird songs did not use drums for accompaniment. Instead, rhythm was provided by gourd or tortoise-shell rattles filled with native palm seeds." },
    { "question": "What is the symbolic significance of the color of the rattles used in Kumeyaay bird songs?", "answer": "The color of the rattles used in Kumeyaay bird songs carried a highly personal symbolic value for their owners. It held importance beyond its visual appearance." },
    { "question": "How have Kumeyaay bird songs adapted and evolved over time?", "answer": "Kumeyaay bird songs have survived as one of the last remnants of a once-flourishing collection of songs and dances. They continue to serve a utilitarian role in ceremonies, commemorations, and cultural preservation." },
    { "question": "How is dancing incorporated into Kumeyaay bird songs?", "answer": "When bird songs are performed during the daytime, dancing accompanies the songs, providing a social-entertainment context. In contrast, during all-night singing sessions, dancing may or may not occur as a group of singers gather to perform the entire cycle of songs." }
  ];

  for (const button of buttons) {
    button.addEventListener("click", () => {
      const selectedQuestion = button.textContent;
      const selectedAnswer = getAnswerForQuestion(selectedQuestion);
      const randomQuestions = getRandomQuestions(3, qaPairs.map(pair => pair.question));
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = randomQuestions[i];
      }
      var snd = new Audio("ping-82822.mp3");
      displayMessage("You:", selectedQuestion);
      displayMessage("Chatbot:", selectedAnswer);
      snd.play();
      snd.currentTime=0;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  }

  function getRandomQuestions(numQuestions, questionList) {
    const shuffled = questionList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
  }

  function getAnswerForQuestion(question) {
    for (const qaPair of qaPairs) {
      if (qaPair.question === question) {
        return qaPair.answer;
      }
    }
    return "Great! Let's Begin. Ask me your first question!";
  }

  function displayMessage(sender, message) {
    const messageContainer = document.createElement("div");
    messageContainer.className = "message-container";

    const senderElement = document.createElement("div");
    senderElement.className = "sender";
    senderElement.textContent = sender;

    const messageElement = document.createElement("div");
    messageElement.className = "message";
    messageElement.textContent = message;

    messageContainer.appendChild(senderElement);
    messageContainer.appendChild(messageElement);
    chatMessages.appendChild(messageContainer);
  }
});
