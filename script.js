const clockEl = document.querySelector(".clock");
const dateEl = document.querySelector(".date");

class Clock {
  locale = "id-ID";
  options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  formatTime(date) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  formatDate(date) {
    return date.toLocaleString(this.locale, this.options);
  }

  render() {
    const d = new Date();
    const date = this.formatDate(d);
    const time = this.formatTime(d);
    clockEl.textContent = time;
    dateEl.textContent = date;
  }
}

const clock = new Clock();

setInterval(() => clock.render(), 1000);
