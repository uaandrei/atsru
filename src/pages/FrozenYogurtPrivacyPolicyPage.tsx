const FrozenYogurtPrivacyPolicyPage = () => (
  <div className="privacy-policy">
    <h1>Privacy Policy for Frozen Yogurt</h1>

    <p><strong>Last Updated: November 2, 2024</strong></p>

    <h2>Introduction</h2>
    <p>
      Frozen Yogurt ("we", "our", or "the app") is a personal wealth management and shopping list application that prioritizes your privacy. This Privacy Policy explains how we handle your information when you use our mobile and desktop application.
    </p>

    <h2>Our Privacy Commitment</h2>
    <p>
      <strong>Your data stays on your device.</strong> We believe your financial information is yours alone. Frozen Yogurt is designed with privacy at its core—all your wealth tracking and shopping data is stored locally on your device and is never transmitted to our servers or third parties.
    </p>

    <h2>Information We Collect</h2>

    <h3>Authentication Information</h3>
    <p>When you sign in with Google, we collect:</p>
    <ul>
      <li><strong>Google Account Information</strong>: Your Google User ID (UID), display name, email address, and profile photo (if available)</li>
      <li><strong>Purpose</strong>: To authenticate your identity and provide a personalized experience</li>
      <li><strong>Storage</strong>: This information is stored temporarily in memory during your session and is not persisted to our local database</li>
    </ul>

    <h3>Data You Create</h3>
    <p>When you use the app, we store locally on your device:</p>
    <ul>
      <li><strong>Wealth Information</strong>: Account names, account types (cash/bank/brokerage), balances, stock tickers, quantities, and manually entered stock prices</li>
      <li><strong>Shopping Information</strong>: Shopping item names, categories, purchase timestamps, check status, and recurrence intervals</li>
      <li><strong>Purpose</strong>: To provide you with wealth tracking and shopping list management functionality</li>
      <li><strong>Storage</strong>: All data is stored in a local SQLite database on your device only</li>
    </ul>

    <h2>How We Use Your Information</h2>
    <p>We use your information solely to:</p>
    <ol>
      <li>Authenticate your access to the app via Google Sign-In</li>
      <li>Display your wealth totals and account summaries</li>
      <li>Manage your shopping list and provide purchase recurrence suggestions</li>
      <li>Maintain your session while you use the app</li>
    </ol>

    <h2>Data Storage and Security</h2>

    <h3>Local Storage</h3>
    <ul>
      <li>All financial and shopping data is stored exclusively in a local SQLite database on your device</li>
      <li>No wealth or shopping information leaves your device</li>
      <li>You maintain complete control over your data through standard device backup and security features</li>
    </ul>

    <h3>Authentication</h3>
    <ul>
      <li>Google Sign-In is used only for authentication purposes</li>
      <li>We do not access or store your Google account credentials</li>
      <li>Authentication tokens are managed securely by Google's authentication infrastructure</li>
    </ul>

    <h2>Data Sharing and Third Parties</h2>

    <h3>We Do Not Share Your Data</h3>
    <p>We <strong>never</strong> sell, rent, trade, or share your personal information, financial data, or shopping information with third parties.</p>

    <h3>Third-Party Services</h3>
    <p>The only external service we use is:</p>
    <ul>
      <li><strong>Google Sign-In</strong>: For authentication purposes only. Google's use of your information is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a></li>
    </ul>

    <h2>Your Rights and Control</h2>
    <p>You have complete control over your data:</p>

    <h3>Access and Portability</h3>
    <ul>
      <li>All your data is accessible within the app at any time</li>
      <li>You can export your data through your device's standard backup mechanisms</li>
    </ul>

    <h3>Deletion</h3>
    <ul>
      <li>You can delete individual accounts, stocks, or shopping items within the app</li>
      <li>You can clear all app data through your device's application settings</li>
      <li>Uninstalling the app will remove all locally stored data</li>
    </ul>

    <h3>Sign Out</h3>
    <ul>
      <li>You can sign out at any time, which ends your session</li>
      <li>Signing out does not delete your local data unless you explicitly clear it</li>
    </ul>

    <h2>Data Retention</h2>
    <ul>
      <li><strong>Session Data</strong>: Authentication information is retained only during your active session</li>
      <li><strong>Local Data</strong>: Financial and shopping data persists on your device until you explicitly delete it or uninstall the app</li>
      <li><strong>No Server Retention</strong>: Since we don't collect data on servers, there is no server-side data retention</li>
    </ul>

    <h2>Children's Privacy</h2>
    <p>
      Frozen Yogurt is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us immediately.
    </p>

    <h2>Platform-Specific Information</h2>

    <h3>Mobile (Android/iOS)</h3>
    <ul>
      <li>Data is stored in the app's sandbox directory</li>
      <li>Standard OS-level encryption applies when your device is locked</li>
      <li>Device backups (iCloud/Google Drive) may include app data based on your device settings</li>
    </ul>

    <h3>Desktop (Windows/macOS/Linux)</h3>
    <ul>
      <li>Data is stored in the app's local application directory</li>
      <li>Security depends on your system's user account protections and file system encryption settings</li>
    </ul>

    <h2>No Cloud Sync</h2>
    <p>
      <strong>Version 1 (v1)</strong> of Frozen Yogurt does not include cloud synchronization features. Your data:
    </p>
    <ul>
      <li>Remains solely on the device where you created it</li>
      <li>Is not synchronized across multiple devices</li>
      <li>Is not backed up to any cloud service by the app itself</li>
    </ul>
    <p>
      Future versions may offer optional cloud sync features, and this policy will be updated accordingly with your explicit consent required.
    </p>

    <h2>International Data Transfers</h2>
    <p>
      Since all data is stored locally on your device, there are no international data transfers of your financial or shopping information. Google Sign-In authentication may involve international data transfers as governed by Google's privacy policy.
    </p>

    <h2>Security Measures</h2>
    <p>We implement security measures including:</p>
    <ul>
      <li>Local database storage isolated within the app's sandbox</li>
      <li>No transmission of financial data over networks</li>
      <li>Secure authentication via Google's infrastructure</li>
      <li>Session-based access control</li>
    </ul>
    <p>However, we cannot guarantee absolute security. You are responsible for:</p>
    <ul>
      <li>Keeping your device secure with passcodes/biometrics</li>
      <li>Protecting your Google account credentials</li>
      <li>Maintaining physical security of your device</li>
    </ul>

    <h2>Changes to This Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make changes:</p>
    <ul>
      <li>We will update the "Last Updated" date at the top of this policy</li>
      <li>Significant changes will be communicated through the app or our website</li>
      <li>Your continued use of the app after changes constitutes acceptance of the updated policy</li>
    </ul>

    <h2>Legal Basis for Processing (GDPR)</h2>
    <p>If you are in the European Economic Area (EEA), our legal basis for processing your personal information is:</p>
    <ul>
      <li><strong>Consent</strong>: By using Google Sign-In, you consent to authentication processing</li>
      <li><strong>Legitimate Interest</strong>: Processing data locally on your device to provide the app's core functionality</li>
    </ul>
    <p>
      You have the right to withdraw consent or object to processing at any time by signing out or uninstalling the app.
    </p>

    <h2>California Privacy Rights (CCPA)</h2>
    <p>If you are a California resident, you have the right to:</p>
    <ul>
      <li>Know what personal information is collected (see "Information We Collect")</li>
      <li>Request deletion of your personal information (uninstall the app or clear app data)</li>
      <li>Opt-out of the sale of personal information (we do not sell any personal information)</li>
    </ul>

    <h2>Contact Us</h2>
    <p>If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:</p>
    <p>
      <strong>Email</strong>: ro.atsru@gmail.com<br />
    </p>

    <h2>Transparency Commitment</h2>
    <p>We are committed to transparency. If you have questions about:</p>
    <ul>
      <li>What data is collected</li>
      <li>How data is used or stored</li>
      <li>Your privacy rights</li>
      <li>Any aspect of this policy</li>
    </ul>
    <p>Please don't hesitate to reach out. We will respond promptly and honestly.</p>

    <hr />

    <h2>Summary (TL;DR)</h2>
    <ul className="list-unstyled">
      <li>✅ <strong>Your data stays on your device</strong> – All financial and shopping data is stored locally</li>
      <li>✅ <strong>No cloud sync</strong> – Nothing is sent to our servers</li>
      <li>✅ <strong>Google Sign-In only</strong> – Used solely for authentication</li>
      <li>✅ <strong>No third-party sharing</strong> – We never sell or share your data</li>
      <li>✅ <strong>You're in control</strong> – Delete data anytime, uninstall to remove everything</li>
      <li>✅ <strong>Offline-first</strong> – Works without internet except for initial sign-in</li>
    </ul>
    <p><strong>Your privacy is our priority.</strong></p>
  </div>
);

export { FrozenYogurtPrivacyPolicyPage };
