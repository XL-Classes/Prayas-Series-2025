const resultsData = {
    "Prayas 3 - 2025": {
        232501: {
            name: "Aarti Kumawat",
            marks: {
                Mathematics: 25 + " / 50",
            },
        },
        232502: {
            name: "Antima Rathore",
            marks: {
                Mathematics: 22 + " / 50",
            },
        },
        232503: {
            name: "Babita Sankhala",
            marks: {
                Mathematics: 16 + " / 50",
            },
        },
        232504: {
            name: "Bhavya Kumawat",
            marks: {
                Mathematics: 35 + " / 50",
            },
        },
        232505: {
            name: "Devika Soni",
            marks: {
                Mathematics: "Absent",
            },
        },
        232506: {
            name: "Kanishka Garhwal",
            marks: {
                Mathematics: 47 + " / 50",
            },
        },
        232507: {
            name: "Krishna Kumawat",
            marks: {
                Mathematics: 2 + " / 50",
            },
        },
        232508: {
            name: "Manisha Meena",
            marks: {
                Mathematics: 15 + " / 50",
            },
        },
        232509: {
            name: "Mukesh Sheshma",
            marks: {
                Mathematics: "Absent",
            },
        },
        232510: {
            name: "Priyanshu Kumawat",
            marks: {
                Mathematics: 17 + " / 50",
            },
        },
        232511: {
            name: "Rishi Raj Dixit",
            marks: {
                Mathematics: "Absent",
            },
        },
        232512: {
            name: "Roshan Kumawat",
            marks: {
                Mathematics: 8 + " / 50",
            },
        },
        232513: {
            name: "Saksham Kumawat",
            marks: {
                Mathematics: 26 + " / 50",
            },
        },
        232514: {
            name: "Sarthak Bansal",
            marks: {
                Mathematics: 33 + " / 50",
            },
        },
        232515: {
            name: "Simran Gajraj",
            marks: {
                Mathematics: 44 + " / 50",
            },
        },
        232516: {
            name: "Simran Verma",
            marks: {
                Mathematics: "Absent",
            },
        },
        232517: {
            name: "Subhan Ali",
            marks: {
                Mathematics: 39 + " / 50",
            },
        },
        232518: {
            name: "Tanishka Mishra",
            marks: {
                Mathematics: 34 + " / 50",
            },
        },
        232519: {
            name: "Tanuja Soni",
            marks: {
                Mathematics: "Absent",
            },
        },
        232520: {
            name: "Vansh Kumawat",
            marks: {
                Mathematics: "Absent",
            },
        },
    },
    "Prayas 2 - 2025": {
        201: {
            name: "Amit Kumar",
            marks: {
                Math: 72,
                Science: 68,
                English: 80,
                SST: 74,
            },
        },
    },
    "Prayas 1 - 2025": {
        101: {
            name: "Gaurav Kumawat",
            marks: {
                Math: 100,
                Science: 100,
                English: 100,
                SST: 100,
            },
        },
    },
};

// -------------------- Populate Section Dropdown --------------------
const sectionSelect = document.getElementById("sectionSelect");
Object.keys(resultsData).forEach((section) => {
    const option = document.createElement("option");
    option.value = section;
    option.textContent = section;
    sectionSelect.appendChild(option);
});

// -------------------- Get Result Function --------------------
function getResult() {
    const section = sectionSelect.value;
    const roll = document.getElementById("rollInput").value.trim();
    const resultSection = document.getElementById("resultSection");
    const studentName = document.getElementById("studentName");
    const tableBody = document.querySelector("#resultTable tbody");

    // Clear old data
    studentName.textContent = "";
    tableBody.innerHTML = "";
    resultSection.style.display = "none";

    if (!section) {
        alert("Please select a section first!");
        return;
    }
    if (!roll) {
        alert("Please enter a roll number!");
        return;
    }

    const sectionData = resultsData[section];
    const student = sectionData ? sectionData[roll] : null;

    if (!student) {
        alert("Result not found! Please check Roll Number & Section.");
        return;
    }

    // Show Teacher message
    // -------------------- Teacher Messages --------------------
    const teacherMessages = {
        232501:
            "Aarti, tumne is test me accha effort dikhaya hai. Agar tum thoda aur consistency aur practice par dhyaan dogi toh tumhe khud apni progress clearly nazar aayegi. Keep giving your best",
        232502:
            "Antima, tumhari school performance already bohot strong hai. Is test me kuch chapters tumne abhi cover nahi kiye the, isliye result tumhari actual capability ko nahi dikhata. Jaise-jaise tum chapters complete karogi, waise-waise tum apni original strength ke saath perform karogi. Tumse acchi expectations hain, bas regular practice jaari rakho.",
        232503:
            "Babita, tumne effort dikhaya hai aur mujhe pata hai ki tum apna result aur better karne ki capability rakhti ho. Ab thoda aur focus aur practice ke saath tum definitely agle test me improvement laa sakti ho. Bas regularity banaye rakho, progress zaroor milegi",
        232504:
            "Bhavya, tumne 50 me se 35 marks laakar 4th rank secure ki hai 👍. Yeh ek acchi shuruaat hai, aur tum clearly potential dikhate ho. Agar thoda aur regular practice aur focus doge toh agle test me tum easily top ranks me aa sakte ho. Keep working hard!",
        232505:
            "“Is test me aap  absent the. Yaad rakho, har test ek mauka hai apni progress samajhne ka. Regular rehna hi success ki key hai — agli baar koi bhi test  miss na ho.”",
        232506:
            "Kanishka, 50 me se 47 laakar tumne first rank hasil ki hai 👏. Yeh result tumhari lagataar practice aur focus ka nateeja hai. Is speed aur discipline ko banaye rakho, tum aur aage badhogi. Proud of you!",
        232507:
            "“Krishna, tumhara base abhi weak hai aur coaching regular attend na karne ki wajah se is test me marks kam aaye. Agar tum regular aaoge aur basics pe focus karoge toh dheere-dheere tumhari performance improve ho jaayegi. Consistency hi sabse important hai.”",
        232508:
            "“Manisha, abhi base strong karne par dhyaan do. Dheere-dheere tumhari performance khud improve ho jaayegi.”",
        232509:
            "“Is test me aap  absent the. Yaad rakho, har test ek mauka hai apni progress samajhne ka. Regular rehna hi success ki key hai — agli baar koi bhi test miss na ho.”",
        232510:
            "“Priyanshu, tumhare andar bohot capability hai aur tum easily apna performance improve kar sakte ho. Is baar result utna strong nahi raha, lekin thoda aur regular practice aur concentration se tum apni asli potential dikh doge. Mujhe tumse accha progress dekhne ki puri ummeed hai.”",
        232511:
            "“Is test me aap  absent the. Yaad rakho, har test ek mauka hai apni progress samajhne ka. Regular rehna hi success ki key hai — agli baar koi bhi test miss na ho.”",
        232512:
            "“Roshan, abhi result weak aaya hai lekin tumhare paas improve karne ka full chance hai. Basics par focus karo aur regular practice se tum zaroor better karoge.”",
        232513:
            "“Saksham, tumhari performance me effort dikhayi diya hai. Ab thoda aur focus aur regular practice se tum apna result aur behtar bana sakte ho. Har test ek naya chance hota hai improve karne ka — is spirit ko banaye rakho.”",
        232514:
            "“Sarthak Bansal, tumne is test me apne effort dikhaye hain. Tumhare andar aur better karne ki poori capability hai. Agar tum thoda aur regular practice aur focus doge toh agle test me tum apni performance aur strong bana paoge. Keep working consistently!”",
        232515:
            "“Simran, tumne 50 me se 44 marks laakar second rank secure ki hai 👍. Tumhari mehnat clearly dikh rahi hai. Agar isi consistency ko aur thoda push dogi toh tum easily first rank tak pahunch sakti ho. Keep it up!”",
        232516:
            "Is test me aap  absent the. Yaad rakho, har test ek mauka hai apni progress samajhne ka. Regular rehna hi success ki key hai — agli baar koi bhi test miss na ho.",
        232517:
            "“Subhan, tumne 50 me se 39 marks laakar third rank hasil ki hai 👏. Yeh ek strong performance hai, bas thoda aur regular practice karoge toh tum aur upar jaa sakte ho. Apne effort ko aise hi banaye rakho, improvement pakka hoga.”",
        232518:
            "“Tanishka, tumne apne effort se ek accha result diya hai 👏. Tumhare andar aur aage badhne ki poori capability hai. Bas thoda aur focus aur regular practice rakho, tum easily top ranks tak pahunch sakti ho. Mehnat jaari rakho!”",
        232519:
            "“Is test me aap  absent the. Yaad rakho, har test ek mauka hai apni progress samajhne ka. Regular rehna hi success ki key hai — agli baar koi bhi test miss na ho.”",
        232520:
            "Is test me aap  absent the. Yaad rakho, har test ek mauka hai apni progress samajhne ka. Regular rehna hi success ki key hai — agli baar koi bhi test miss na ho.",
    };

    // -------------------- Get Result Function (inside student found block) --------------------
    const teacherMessageDiv = document.getElementById("teacherMessage");
    const messageText = document.getElementById("messageText");

    // Default hide
    teacherMessageDiv.style.display = "none";

    if (teacherMessages[roll]) {
        messageText.textContent = teacherMessages[roll];
        teacherMessageDiv.style.display = "block";
    }

    // Show result
    studentName.textContent = student.name;

    for (let subject in student.marks) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${subject}</td><td>${student.marks[subject]}</td>`;
        tableBody.appendChild(row);
    }

    resultSection.style.display = "block";
}

// -------------------- Download Checked Copy (Dummy) --------------------
document.getElementById("downloadBtn").addEventListener("click", () => {
    alert("Feature coming soon: Download checked copy as PDF/Img");
});
