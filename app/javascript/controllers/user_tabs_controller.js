import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="user-tabs"
export default class extends Controller {
  static targets = ["content", "projects", "messages", "skills", "badges"]

  connect() {
    console.log("hello from organization tabs controller");
  }

  setProjectsActive() {
    this.projectsTarget.classList.add("active");
    this.messagesTarget.classList.remove("active");
    this.skillsTarget.classList.remove("active");
    this.badgesTarget.classList.remove("active");
  }

  setMessagesActive() {
    this.projectsTarget.classList.remove("active");
    this.messagesTarget.classList.add("active");
    this.skillsTarget.classList.remove("active");
    this.badgesTarget.classList.remove("active");
  }

  setSkillsActive() {
    this.projectsTarget.classList.remove("active");
    this.messagesTarget.classList.remove("active");
    this.skillsTarget.classList.add("active");
    this.badgesTarget.classList.remove("active");
  }

  setBadgesActive() {
    this.projectsTarget.classList.remove("active");
    this.messagesTarget.classList.remove("active");
    this.skillsTarget.classList.remove("active");
    this.badgesTarget.classList.add("active");
  }

  renderProjects(event) {
    event.preventDefault();

    this.setProjectsActive();

    const url = `${this.projectsTarget.href}`
    fetch(url, { headers: { "Accept": "text/plain" } })
      .then(response => response.text())
      .then((data) => {
        this.contentTarget.innerHTML = data
      })
  }

  renderMessages(event) {
    event.preventDefault();

    this.setMessagesActive();

    const url = `${this.messagesTarget.href}`
    fetch(url, { headers: { "Accept": "text/plain" } })
      .then(response => response.text())
      .then((data) => {
        this.contentTarget.innerHTML = data
      })
  }

  renderSkills(event) {
    event.preventDefault();

    this.setSkillsActive();

    const url = `${this.skillsTarget.href}`
    fetch(url, { headers: { "Accept": "text/plain" } })
      .then(response => response.text())
      .then((data) => {
        this.contentTarget.innerHTML = data
      })
  }

  renderBadges(event) {
    event.preventDefault();

    this.setBadgesActive();

    const url = `${this.badgesTarget.href}`
    fetch(url, { headers: { "Accept": "text/plain" } })
      .then(response => response.text())
      .then((data) => {
        this.contentTarget.innerHTML = data
      })
  }
}
