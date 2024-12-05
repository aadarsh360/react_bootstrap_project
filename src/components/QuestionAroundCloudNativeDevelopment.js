
import React, {useState} from 'react'

function QuestionAroundCloudNativeDevelopment() {
  
    const [selectedItem, setSelectedItem] = useState(null);

  // Sample array of items
  const items = [
    { id: 1, name: "Why should I choose InfraCloud as a cloud native product development partner?", details: "When choosing a cloud native product development partner, proof of the team’s expertise & experience with cloud native is essential. InfraCloud is a Kubernetes Certified Service Partner (KCSP) and CNCF silver member. The team includes 4 CKS, 51 CKA & 19 Certified Kubernetes Application Developers who have worked with 100+ clients. InfraCloud is also a winner of the Stratus 2023 award in the cloud native category." },
    { id: 2, name: "What is the typical process for engaging your cloud native product development services?", details: "Once you schedule a meeting with our cloud native experts, our team will chat with you to gain a deeper understanding of your project, specific requirements, and goals. Once the SoW is agreed upon, our team will kick off the project and keep you updated through a dedicated channel & regular sync-ups for communication and support." },
    { id: 3, name: "Would you be maintaining the cloud native product after development?", details: "The project does not end once the product is developed. Our team will ensure it is scalable, secure, and compliant. Depending on SoW, we will produce the training documents and plans to improve its adoption in cloud native community. If you wish, you can also receive support for your product, where we will keep updating and upgrading it to enhance its capabilities." },
    { id: 4, name: "What are some cloud native products you developed?", details: "We have developed Fission, BotKube, and Krius. Our team has also helped make Kyverno, Paralus, Tinkerbell, and Crossplane. Please schedule a call to learn more about previous projects, or you can check our success cases." },
  ];

  const toggleItem = (id) => {
    // Toggle the currently selected item
    setSelectedItem(selectedItem === id ? null : id);
  };

  return (
    <div className="container mt-4 px-4">
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item.id}
            className="list-group-item text-start p-4 fw-bold box-shadow"
            onClick={() => toggleItem(item.id)}
            style={{ cursor: "pointer" }}
          >
            {item.name}
            {/* Show details below if this item is selected */}
            {selectedItem === item.id && (
              <div className="mt-2 p-2 text-gray">
                {item.details}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionAroundCloudNativeDevelopment
