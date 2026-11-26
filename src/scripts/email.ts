export function fillEmailLinks() {
  for (const link of document.querySelectorAll<HTMLAnchorElement>('a[data-email-user]')) {
    const email = `${link.dataset.emailUser}@${link.dataset.emailDomain}`
    link.href = `mailto:${email}`
    link.textContent = email
  }
}
