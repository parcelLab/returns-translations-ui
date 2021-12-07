/* eslint-disable quotes */
import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import TextEditor from './components/TextEditor'

interface ApplicationProps {
  lang: string
  countries: string
  user: string
}

const translations: { [k: string]: { [k: string]: string } } = {
  Signin: {
    HEADING: 'Anmeldung',
    HEADERTEXT:
      '<p>Bitte geben Sie Ihre Bestellnummer und die E-Mail Adresse ein und teilen Sie uns mit, welche Artikel Sie zurückgeben möchten.</p><p>Die Bestellnummer finden Sie auf der Rechnung.</p>',
    LABEL_REF: 'Bestellnummer ',
    LABEL_ZIP: 'E-Mail Adresse',
    PLACEHOLDER_REF: 'e.g. 31234567890',
    PLACEHOLDER_ZIP: 'e.g. EC2V 6AH',
    SUBMIT: 'Einloggen',
    SUBTEXT: '',
    ERROR_ORDERNO:
      '8-stellig und befindet sich auf dem Lieferschein und/oder der Rechnung',
    ERROR_ZIP: 'E-Mail Adresse ungültig',
    ERROR_API:
      "Ihre Bestellung konnte nicht gefunden werden. Überprüfen Sie Ihre Daten oder kontaktieren Sie unseren <a href='https://www.dress-for-less.de/hilfe-service/help.html' target='_blank'>Kundenservice.</a>"
  },
  ArticleList: {
    select_all: 'Alle Artikel auswählen',
    deselect_all: 'Alle Artikel abwählen'
  },
  ArticleItem: {
    item_name: 'Artikelbezeichnung',
    article_nr: 'Artikelnummer',
    size: 'Größe',
    quantity: 'Stückzahl',
    quantity_short: 'Stückzahl',
    returned_items: 'Zu retournierende Artikel',
    problem_decription: 'Beschreibung',
    select_return_conditions: 'Rückgabeoption wählen',
    exchange: 'Umtausch',
    exchange_hint:
      'Im Falle eines Umtausches wird der gleiche Artikel geliefert.',
    refund: 'Rückerstattung',
    repair: 'Reparatur',
    warranty: 'Garantie',
    required: 'erforderlich',
    optional: 'optional',
    select: 'auswählen',
    article_select_label: 'Diesen Artikel zurücksenden',
    reason_select_label: 'Grund für die Rücksendung auswählen',
    return_reason: 'Grund für die Rücksendung',
    return_conditions: 'Rückgabeoption',
    image_upload_label: 'Bilder auswählen',
    image_upload_hint: '* Maximale Dateigröße: 5 MB',
    image_upload_placeholder: 'Bilder hochladen',
    /*image_upload_placeholder_selected: [
      '{{n}} Bild ausgewählt',
      '{{n}} Bilder ausgewählt'
    ],*/
    color: 'Colour',
    POPOVER: 'Option not available right now.',
    POPOVERSUB:
      'Please use the return form on the delivery note for this reason.',
    check_size: 'Check if your preferred size is available.'
  },
  OrderInformation: {
    HEADING: 'Auftrag',
    HEADING_ADRESS: 'Adresse',
    name: 'Name',
    order_number: 'Unsere Referenz',
    order_date: 'Bestelldatum'
  },
  ConfirmReturnPopup: {
    HEADING: 'Rücksendung bestätigen',
    TEXT: 'Sind Sie sicher, dass Sie die Rücksendung anmelden wollen?',
    submit: 'Bestätigen',
    cancel: 'Abbrechen'
  },
  AddressForm: {
    HEADING: 'Adresse',
    change_address: 'Angaben ändern',
    update_address: 'Aktuelle E-Mail Adresse hinzufügen',
    form_heading: 'Adresse aktualisieren',
    form_note:
      'Alle Austauschprodukte werden hierher geschickt. Bitte beachten Sie, dass dadurch die Lieferadresse in Ihrem Konto nicht aktualisiert wird.',
    form_name: 'Vor- und Nachname',
    form_street: 'Adresszeile 1',
    form_street2: 'Adresszeile 2',
    form_zip: 'PLZ',
    form_city: 'Stadt',
    form_country: 'Land',
    form_email: 'E-Mail Adresse (erforderlich)',
    form_required_field: 'Dieses Feld wird benötigt',
    form_email_correct_pattern: 'E-Mail hat falsches Format',
    cancel: 'Abbrechen',
    save: 'Speichern',
    notSecondHand: 'Sie sind der ursprüngliche Kunde?',
    yes: 'Ja',
    no: 'Nein',
    moved: 'Sind Sie umgezogen?',
    please_select: 'Bitte auswählen',
    required: 'erforderlich',
    original_customer: 'Ich bin der ursprüngliche Kunde',
    second_hand: 'Ich habe es aus zweiter Hand gekauft',
    email_required: 'Folgende Angaben werden noch benötigt: E-Mail Adresse'
  },
  ReturnedArticleList: {
    HEADING: 'Sie geben zurück:'
  },
  Courier: {
    HEADING: 'Select a return method',
    HEADERTEXT: '',
    'description_<courier>': 'Arrange a collection for your online return.'
  },
  CourierLabelBox: {
    HEADING: 'Ihr Rücksendeetikett',
    barcode_heading:
      'Weisen Sie den Barcode in der Annahmestelle vor, wenn Sie das Paket aufgeben.',
    barcode_description:
      'Geben Sie das Paket in einer Annahmestelle ab und lassen Sie den angezeigten Barcode von Ihrem Smartphone scannen.',
    barcode_button: 'Barcode herunterladen',
    printathome_heading: 'Oder lieber zu Hause ausdrucken?',
    printathome_description:
      'Das ist kein Problem. Sie können das Etikett über den untenstehenden Button herunterladen, ausdrucken und auf die Verpackung kleben.',
    printlabel_heading: 'Rücksendeetikett zu Hause ausdrucken',
    printlabel_description:
      'Sie können das Etikett über den untenstehenden Button herunterladen. Bitte drucken Sie dieses aus und kleben es auf die Verpackung.',
    printathome_button: 'Etikett herunterladen',
    'SHOPFINDER_LABEL_<courier>': 'Nächste Annahmestelle finden',
    'SHOPFINDER_LINK_<courier>':
      'https://www.dhl.de/de/privatkunden/dhl-standorte-finden.html',
    find_dropoffpoint: 'Trouver le bureau de poste le plus proche'
  },
  Rating: {
    DONE: 'Danke schön!',
    HEADING1: 'Wir suchen immer nach Wegen, uns zu verbessern.',
    HEADING2: 'Ihre Meinung ist uns wichtig!'
  },
  Return: {
    HEADING: 'Enregistrez votre retour',
    HEADERTEXT: 'Quel article souhaitez-vous nous retourner ? ',
    TRIAL_OVER:
      "La période d'essai de {{days}} jours a expiré, mais vous avez toujours la garantie.",
    NO_ARTICLES: 'Sie haben alle Artikel Ihrer Bestellung zurückgeben.',
    LOGIN: 'Weitere Rücksendung anmelden',
    SMS_CONSENT:
      'I want to receive SMS notifications regarding my return on the registered phone number.'
  },
  Registered: {
    HEADING: 'Nous avons bien enregistré votre retour.',
    'HEADERTEXT_return-registration':
      "Utilisez l'étiquette de retour ci-dessous et déposez votre colis dans au Point Relais. Conservez la preuve de retour jusqu'à ce que nous ayons traité votre demande. Renvoyez vos articles dans un emballage solide. Le traitement d'un retour prend environ 14 jours. Nous vous enverrons un message une fois que votre retour aura été traité.",
    'HEADERTEXT_<courier>':
      "Utilisez l'étiquette de retour ci-dessous et déposez votre colis dans un point de dépôt. Conservez la preuve de retour jusqu'à ce que nous ayons traité votre demande. Renvoyez vos articles dans un emballage solide. Le traitement d'un retour prend environ 14 jours. Nous vous enverrons un message une fois que votre retour aura été traité.",
    CTA: 'Enregistrer un autre retour',
    HEADERTEXT:
      'Bitte kleben Sie das angehängte Retourenetikett auf das Paket oder nutzen Sie den QR Code, um das Paket bzw. die Versandtüte in einer DHL Filiale, einem DHL Paketshop oder einer Packstation abzugeben. Das Retourenetikett wird dann dort für Sie gedruckt. Bewahren Sie den Nachweis des Versands der Rücksendung auf, bis wir Ihre Rücksendung bearbeitet haben. Wenn nach dem Eintreffen der Rücksendung das Produkt/die Produkte die Rückgabe-Richtlinien erfüllen, erstatten wir Ihnen Ihr Geld binnen 14 Tagen über die gleiche Zahlungsmethode zurück, mit der Sie bei uns eingekauft haben.',
    HEADERTEXT_CHECKRETURN:
      '<p>Unser Kundenservice wird Ihre Registrierung umgehend prüfen und Sie in Kürze mit detaillierten Informationen kontaktieren.</p>'
  },
  RegisterReturn: {
    CTA: 'Enregistrer un retour',
    CTA_PROCEED: 'Enregistrer un retour'
  },
  PickUpBox: {
    'SUBHEADING_<courier>': 'Bluedart reference number: {{refNumber}}.',
    PICKUPADDRESS: 'Pickup address',
    'CANCEL_DISCLAIMER_<courier>': 'Do you want to keep your items after all?',
    CANCEL_PICKUP: 'CANCEL PICKUP',
    CANCEL_MODAL_HEADING: 'Are you sure?',
    'CANCEL_MODAL_TEXT_<courier>':
      'It is only possible to cancel the pickup if Bluedart has not yet taken off to the address entered by you.',
    CANCEL_MODAL_NO: 'NO',
    CANCEL_MODAL_YES: 'YES',
    CANCEL_MODAL_CONFIRM_TOAST:
      'You have cancelled your return. If you change your mind, you can make a new return request.',
    CANCEL_MODAL_ERR_TOAST: "Sorry, it's too late to cancel this pickup.",
    COLLECTION:
      'Your return will be collected on {{hours}} from the displayed address.',
    'HINTADDRESS_<courier>':
      'Delhivery makes two pickup attempts before the system cancels the return. In case the address or contact details are not correct, you can cancel the pickup and register a new return request.',
    CASHONDELIVERY:
      "Since you paid cash on delivery, make sure you have all your bank details saved on your H&M account for the refund. You can check by logging in and navigating to <a href='https://www2.hm.com/en_in/account/payments?utm_source=transactional&utm_medium=returnsportal&utm_content=returninfo&utm_campaign=any' target='_blank'><b>My Account - Cards and payments</b></a>.",
    'HINTREFUND_<courier>':
      'Please allow up to 30 days for the refund to appear in your account once your return has been processed.',
    HINTNOTIFICATIONS: 'We will notify you via e-mail with any status updates.',
    CTA: 'Register another return'
  },
  ConfirmAddress: {
    HEADING: 'Pickup address',
    name: 'Name:',
    address: 'Address:',
    zip: 'Postcode:',
    city: 'City:',
    phone: 'Phone:',
    email: 'E-mail:',
    formaterr: 'Incorrect format',
    formaterr_blank: 'Must have least {{chars}} characters',
    error_form: 'Please fill out the form correctly.',
    'address-validated': 'Personal data validated.',
    reset: 'Reset',
    edit: 'Edit',
    'confirm-address': 'Confirm'
  },
  DatePicker: {
    HEADING: 'Choose a pickup date:',
    selected_date: 'Selected date:'
  },
  ConfirmAddressPopup: {
    HEADING1: 'Verify address & contact details',
    TEXT1:
      'Update your contact details to ensure Dehlivery is picking it up at the correct address and can get in contact in case of any questions.',
    HEADING2: 'Confirm return',
    TEXT2: 'Please confirm your return and check the address. ',
    address: 'Address',
    zip: 'PIN',
    city: 'City',
    phone: 'Phone',
    email: 'E-mail',
    cancel: 'Cancel',
    goback: 'Go back',
    continue: 'Continue',
    submit: 'Submit',
    formaterr: 'Incorrect format',
    formaterr_blank: 'Can not be blank'
  },
  StyleRecommendations: {
    HEADING: 'You might also like these articles'
  },
  KlarnaLink: {
    CTA: 'Report return to Klarna',
    HINT:
      'Put your payment on hold while we process your return! Just go to your purchase and click <b>Report a return</b>.',
    LINK:
      'https://www2.hm.com/en_gb/account/hmxklarna?selectedInvoiceId={{ref}}&utm_source=transactional&utm_medium=returnsportal&utm_content=klarna'
  }
}

export const Application = ({ lang, countries, user }: ApplicationProps) => {
  const [value, setValue] = useState<{ [k: string]: { [k: string]: string } }>(
    JSON.parse(JSON.stringify(translations))
  )
  return (
    <Accordion defaultActiveKey='0'>
      {Object.keys(translations).map((section, i) => {
        return (
          <Accordion.Item eventKey={String(i)} key={section}>
            <Accordion.Header>{section}</Accordion.Header>
            <Accordion.Body>
              {Object.keys(translations[section]).map(key => {
                return (
                  <TextEditor
                    key={key}
                    description={translations[section][key]}
                    title={key}
                    placeholder={translations[section][key]}
                    value={value?.[section]?.[key] || ''}
                    onChange={value => {
                      setValue(cValue => {
                        cValue[section][key] = value
                        return { ...cValue }
                      })
                    }}
                  />
                )
              })}
            </Accordion.Body>
          </Accordion.Item>
        )
      })}{' '}
    </Accordion>
  )
}
