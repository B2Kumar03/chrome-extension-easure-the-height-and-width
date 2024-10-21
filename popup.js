document.getElementById('clickMe').addEventListener('click', () => {
    // Send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: activeTab },
        function: () => {
          alert('This is the active tab!');
        }
      });
    });
  });
  