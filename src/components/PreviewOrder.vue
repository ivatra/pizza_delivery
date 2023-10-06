<template>
  <!-- Notification Toast -->
  <transition name="fade">
    <div
      v-if="showNotification"
      class="notification-toast"
      :class="notificationType"
    >
      <div class="notification-content">
        <img
          v-if="notificationType === 'success'"
          src="/img/cart-icon.png"
          alt="Success icon"
          class="notification-icon"
        />
        <span v-else class="notification-icon">⚠️</span>
        <p>{{ notificationMessage }}</p>
      </div>
    </div>
  </transition>

  <div class="container">
    <div class="box-input">
      <div class="input-order-number">
        <label for="orderNumber">Order Number:</label>
        <input type="text" id="orderNumber" v-model="orderNumber" required />
        <button class="btn" @click="findOrderNumber()">PREVIEW ORDER</button>
      </div>
    </div>

    <!-- Order Preview Section -->
    <div v-if="orderFound" class="order-preview">
      <div class="order-header">
        <h2>Order #{{ orderData.orderNumber }}</h2>
        <div class="order-status">
          <span class="status-badge">🍕 Cooking</span>
        </div>
      </div>

      <div class="order-details">
        <p class="order-date">Ordered: {{ formatDate(orderData.date) }}</p>
        <p class="order-total">Total: ${{ orderData.totalprice }}</p>
      </div>

      <div class="order-items">
        <h3>Items:</h3>
        <div
          v-for="(pizza, index) in orderData.pizza"
          :key="index"
          class="order-item"
        >
          <div class="item-info">
            <h4>{{ pizza.title }}</h4>
            <p class="item-details">
              Size: {{ pizza.sizeSelected }} | Quantity: {{ pizza.quantity }} |
              Price: ${{ pizza.priceSelected }}
            </p>
            <div
              v-if="
                pizza.custom && pizza.ingredient && pizza.ingredient.length > 0
              "
              class="item-ingredients"
            >
              <span class="ingredients-label">Ingredients:</span>
              <span v-for="(ingredient, idx) in pizza.ingredient" :key="idx">
                {{ ingredient.name
                }}{{ idx < pizza.ingredient.length - 1 ? ", " : "" }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="order-actions">
        <button class="btn btn-primary" @click="addOrderToCart()">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useOrdersStore } from "@/store/OrdersStore";
import { usePizzaStore } from "@/store/PizzaStore";

export default {
  name: "PreviewOrder",
  data() {
    return {
      orderNumber: "",
      orderFound: false,
      orderData: null,
      showNotification: false,
      notificationMessage: "",
      notificationType: "success", // 'success' or 'error'
    };
  },
  setup() {
    const orderStore = useOrdersStore();
    const previewOrders = orderStore.getPreviewOrders;
    const pizzaStore = usePizzaStore();
    return { orderStore, previewOrders, pizzaStore };
  },

  methods: {
    findOrderNumber() {
      fetch(`${process.env.VUE_APP_API_URL}/previeworder/${this.orderNumber}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((json) => {
          // Check if order was found
          if (!json || !json.pizza) {
            this.showErrorNotification(
              `Order #${this.orderNumber} not found. Please check the order number and try again.`
            );
            this.orderFound = false;
            this.orderData = null;
            return;
          }

          // Display the order preview
          this.orderFound = true;
          this.orderData = json;
        })
        .catch((error) => {
          console.error("Error fetching order:", error);
          this.showErrorNotification(
            "An error occurred while fetching the order. Please try again."
          );
          this.orderFound = false;
          this.orderData = null;
        });
    },

    addOrderToCart() {
      this.pizzaStore.clearCart();

      for (let pizza of this.orderData.pizza) {
        if (pizza.custom === true) {
          this.pizzaStore.addCustomToCart(pizza);
        } else {
          this.pizzaStore.addPizzaToCart(
            pizza,
            pizza.priceSelected,
            pizza.sizeSelected
          );
        }
      }

      this.showSuccessNotification(
        `Order #${this.orderData.orderNumber} added to cart!`
      );
      setTimeout(() => {
        this.$router.push("/cart/1");
      }, 1500);
    },

    showSuccessNotification(message) {
      this.notificationMessage = message;
      this.notificationType = "success";
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    },

    showErrorNotification(message) {
      this.notificationMessage = message;
      this.notificationType = "error";
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    },
  },
};
</script>

<style scoped>
.order-preview {
  margin-top: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
}

.order-header h2 {
  margin: 0;
  color: #333;
  font-size: 28px;
}

.order-status {
  display: flex;
  align-items: center;
}

.status-badge {
  background: linear-gradient(135deg, #ff6b6b 0%, #ff4444 100%);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 2px 6px rgba(255, 68, 68, 0.3);
}

.order-details {
  margin-bottom: 30px;
  display: flex;
  gap: 30px;
}

.order-date,
.order-total {
  margin: 5px 0;
  font-size: 16px;
  color: #666;
}

.order-total {
  font-weight: bold;
  font-size: 18px;
  color: #333;
}

.order-items {
  margin-bottom: 30px;
}

.order-items h3 {
  margin-bottom: 20px;
  color: #333;
  font-size: 22px;
}

.order-item {
  background: #f9f9f9;
  border-left: 4px solid #ff4444;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
}

.item-info h4 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 18px;
}

.item-details {
  margin: 8px 0;
  color: #666;
  font-size: 14px;
}

.item-ingredients {
  margin-top: 10px;
  padding: 10px;
  background: white;
  border-radius: 6px;
  font-size: 14px;
  color: #555;
}

.ingredients-label {
  font-weight: bold;
  margin-right: 8px;
  color: #333;
}

.order-actions {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.btn-primary {
  background: linear-gradient(135deg, #ff6b6b 0%, #ff4444 100%);
  color: white;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 68, 68, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 68, 68, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Notification Toast */
.notification-toast {
  position: fixed;
  top: 20px;
  right: 20px;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10000;
  max-width: 400px;
}

.notification-toast.success {
  background-color: #4caf50;
}

.notification-toast.error {
  background-color: #f44336;
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.notification-icon {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
  font-size: 24px;
}

.notification-content p {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
