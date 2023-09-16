
如何添加新事件
=====================

在此項目中添加自定義事件非常簡單。請按照以下步驟無縫集成新事件：

### 1. 定義您的事件常量：

- 導航到 `events` 目錄或文件。
- 為您的新事件聲明一個常量。這有助於標準化事件名稱，並使其更容易稍後引用。

```javascript
const YOUR_NEW_EVENT = 'YourNewEventName';
```

### 2. 發出您的事件：

- 在您的代碼中的所需位置（例如，在 `GameClient` 收到某種特定類型的消息時），發出事件。

```javascript
if (message.type === "TriggerSth") {
    // 您的特定邏輯在此...
    this.eventHandler.emitSharedEvent(events.YOUR_NEW_EVENT, data);
}
```

### 3. 註冊事件處理程序：

- 在 `GameEventManager` 或任何其他適當的事件管理器類中為您的新事件註冊一個處理程序。

- 確保您在構造函數或初始化方法中進行此註冊。

```javascript
constructor() {
    // 現有的事件註冊...
    sharedEventHandler.registerEvent(events.YOUR_NEW_EVENT, this.yourEventHandlerFunction.bind(this));
}
```

按照上述步驟，您可以輕鬆地在項目中添加和管理自定義事件。
