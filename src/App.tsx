/* eslint-disable quotes */
import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Accordion from 'react-bootstrap/Accordion'
import Tabs from 'react-bootstrap/Tabs'
import TextEditor from './components/TextEditor'
import TextArea from './components/TextArea'

interface ApplicationProps {
  lang: string
  country: string
  user: string
}

const config = [
  {
    title: 'Login page',
    image: '',
    sections: [
      {
        key: 'Signin',
        translations: [
          {
            key: 'HEADING',
            type: 'editor'
          },
          {
            key: 'HEADERTEXT',
            type: 'editor'
          },
          {
            key: 'LABEL_REF',
            type: ''
          },
          {
            key: 'LABEL_ZIP',
            type: ''
          },
          {
            key: 'PLACEHOLDER_REF',
            type: ''
          },
          {
            key: 'PLACEHOLDER_ZIP',
            type: ''
          },
          {
            key: 'SUBMIT',
            type: ''
          },
          {
            key: 'SUBTEXT',
            type: ''
          },
          {
            key: 'ERROR_ORDERNO',
            type: ''
          },
          {
            key: 'ERROR_ZIP',
            type: ''
          },
          {
            key: 'ERROR_API',
            type: ''
          }
        ]
      }
    ]
  },
  {
    title: 'Return page',
    image: '',
    sections: [
      {
        key: 'Return',
        translations: [
          {
            key: 'HEADING',
            type: ''
          },
          {
            key: 'HEADERTEXT',
            type: ''
          },
          {
            key: 'TRIAL_OVER',
            type: ''
          },
          {
            key: 'NO_ARTICLES',
            type: ''
          },
          {
            key: 'LOGIN',
            type: ''
          },
          {
            key: 'SMS_CONSENT',
            type: ''
          }
        ]
      },
      {
        key: 'ArticleList',
        translations: [
          {
            key: 'select_all',
            type: ''
          },
          {
            key: 'deselect_all',
            type: ''
          }
        ]
      },
      {
        key: 'ArticleItem',
        translations: [
          {
            key: 'item_name',
            type: ''
          },
          {
            key: 'article_nr',
            type: ''
          },
          {
            key: 'size',
            type: ''
          },
          {
            key: 'quantity',
            type: ''
          },
          {
            key: 'quantity_short',
            type: ''
          },
          {
            key: 'returned_items',
            type: ''
          },
          {
            key: 'problem_decription',
            type: ''
          },
          {
            key: 'select_return_conditions',
            type: ''
          },
          {
            key: 'exchange',
            type: ''
          },
          {
            key: 'exchange_hint',
            type: ''
          },
          {
            key: 'refund',
            type: ''
          },
          {
            key: 'repair',
            type: ''
          },
          {
            key: 'warranty',
            type: ''
          },
          {
            key: 'required',
            type: ''
          },
          {
            key: 'optional',
            type: ''
          },
          {
            key: 'select',
            type: ''
          },
          {
            key: 'article_select_label',
            type: ''
          },
          {
            key: 'reason_select_label',
            type: ''
          },
          {
            key: 'return_reason',
            type: ''
          },
          {
            key: 'return_conditions',
            type: ''
          },
          {
            key: 'image_upload_label',
            type: ''
          },
          {
            key: 'image_upload_hint',
            type: ''
          },
          {
            key: 'image_upload_placeholder',
            type: ''
          },
          {
            key: 'image_upload_placeholder_selected',
            type: 'array'
          },
          {
            key: 'color',
            type: ''
          },
          {
            key: 'POPOVER',
            type: ''
          },
          {
            key: 'POPOVERSUB',
            type: ''
          },
          {
            key: 'check_size',
            type: ''
          }
        ]
      },
      {
        key: 'RegisterReturn',
        translations: [
          {
            key: 'CTA',
            type: ''
          },
          {
            key: 'CTA_PROCEED',
            type: ''
          }
        ]
      },
      {
        key: 'AddressForm',
        translations: [
          {
            key: 'HEADING',
            type: ''
          },
          {
            key: 'change_address',
            type: ''
          },
          {
            key: 'update_address',
            type: ''
          },
          {
            key: 'form_heading',
            type: ''
          },
          {
            key: 'form_note',
            type: ''
          },
          {
            key: 'form_name',
            type: ''
          },
          {
            key: 'form_street',
            type: ''
          },
          {
            key: 'form_street2',
            type: ''
          },
          {
            key: 'form_zip',
            type: ''
          },
          {
            key: 'form_city',
            type: ''
          },
          {
            key: 'form_country',
            type: ''
          },
          {
            key: 'form_email',
            type: ''
          },
          {
            key: 'form_required_field',
            type: ''
          },
          {
            key: 'form_email_correct_pattern',
            type: ''
          },
          {
            key: 'cancel',
            type: ''
          },
          {
            key: 'save',
            type: ''
          },
          {
            key: 'notSecondHand',
            type: ''
          },
          {
            key: 'yes',
            type: ''
          },
          {
            key: 'no',
            type: ''
          },
          {
            key: 'moved',
            type: ''
          },
          {
            key: 'please_select',
            type: ''
          },
          {
            key: 'required',
            type: ''
          },
          {
            key: 'original_customer',
            type: ''
          },
          {
            key: 'second_hand',
            type: ''
          },
          {
            key: 'email_required',
            type: ''
          }
        ]
      },
      {
        key: 'ConfirmReturnPopup',
        translations: [
          {
            key: 'HEADING',
            type: ''
          },
          {
            key: 'TEXT',
            type: ''
          },
          {
            key: 'submit',
            type: ''
          },
          {
            key: 'cancel',
            type: ''
          }
        ]
      }
    ]
  },
  {
    title: 'Courier page',
    image: '',
    sections: [
      {
        key: 'Courier',
        translations: [
          {
            key: 'HEADING',
            type: ''
          },
          {
            key: 'HEADERTEXT',
            type: ''
          },
          {
            key: 'description_<courier>',
            type: ''
          }
        ]
      },
      {
        key: 'ConfirmAddress',
        translations: [
          {
            key: 'HEADING',
            type: ''
          },
          {
            key: 'name',
            type: ''
          },
          {
            key: 'address',
            type: ''
          },
          {
            key: 'zip',
            type: ''
          },
          {
            key: 'city',
            type: ''
          },
          {
            key: 'phone',
            type: ''
          },
          {
            key: 'email',
            type: ''
          },
          {
            key: 'formaterr',
            type: ''
          },
          {
            key: 'formaterr_blank',
            type: ''
          },
          {
            key: 'error_form',
            type: ''
          },
          {
            key: 'address-validated',
            type: ''
          },
          {
            key: 'reset',
            type: ''
          },
          {
            key: 'edit',
            type: ''
          },
          {
            key: 'confirm-address',
            type: ''
          }
        ]
      },
      {
        key: 'DatePicker',
        translations: [
          {
            key: 'HEADING',
            type: ''
          },
          {
            key: 'selected_date',
            type: ''
          }
        ]
      }
    ]
  },
  {
    title: 'Confirm page',
    image: '',
    sections: [
      {
        key: 'Registered',
        translations: [
          {
            key: 'HEADING',
            type: ''
          },
          {
            key: 'HEADERTEXT_return-registration',
            type: ''
          },
          {
            key: 'HEADERTEXT_<courier>',
            type: ''
          },
          {
            key: 'CTA',
            type: ''
          },
          {
            key: 'HEADERTEXT',
            type: ''
          },
          {
            key: 'HEADERTEXT_CHECKRETURN',
            type: ''
          }
        ]
      },
      {
        key: 'ReturnedArticleList',
        translations: [
          {
            key: 'HEADING',
            type: ''
          }
        ]
      },
      {
        key: 'CourierLabelBox',
        translations: [
          {
            key: 'HEADING',
            type: ''
          },
          {
            key: 'barcode_heading',
            type: ''
          },
          {
            key: 'barcode_description',
            type: ''
          },
          {
            key: 'barcode_button',
            type: ''
          },
          {
            key: 'printathome_heading',
            type: ''
          },
          {
            key: 'printathome_description',
            type: ''
          },
          {
            key: 'printlabel_heading',
            type: ''
          },
          {
            key: 'printlabel_description',
            type: ''
          },
          {
            key: 'printathome_button',
            type: ''
          },
          {
            key: 'SHOPFINDER_LABEL_<courier>',
            type: ''
          },
          {
            key: 'SHOPFINDER_LINK_<courier>',
            type: ''
          },
          {
            key: 'find_dropoffpoint',
            type: ''
          }
        ]
      },
      {
        key: 'PickUpBox',
        translations: [
          {
            key: 'SUBHEADING_<courier>',
            type: ''
          },
          {
            key: 'PICKUPADDRESS',
            type: ''
          },
          {
            key: 'CANCEL_DISCLAIMER_<courier>',
            type: ''
          },
          {
            key: 'CANCEL_PICKUP',
            type: ''
          },
          {
            key: 'CANCEL_MODAL_HEADING',
            type: ''
          },
          {
            key: 'CANCEL_MODAL_TEXT_<courier>',
            type: ''
          },
          {
            key: 'CANCEL_MODAL_NO',
            type: ''
          },
          {
            key: 'CANCEL_MODAL_YES',
            type: ''
          },
          {
            key: 'CANCEL_MODAL_CONFIRM_TOAST',
            type: ''
          },
          {
            key: 'CANCEL_MODAL_ERR_TOAST',
            type: ''
          },
          {
            key: 'COLLECTION',
            type: ''
          },
          {
            key: 'HINTADDRESS_<courier>',
            type: ''
          },
          {
            key: 'CASHONDELIVERY',
            type: ''
          },
          {
            key: 'HINTREFUND_<courier>',
            type: ''
          },
          {
            key: 'HINTNOTIFICATIONS',
            type: ''
          },
          {
            key: 'CTA',
            type: ''
          }
        ]
      },
      {
        key: 'Rating',
        translations: [
          {
            key: 'DONE',
            type: ''
          },
          {
            key: 'HEADING1',
            type: ''
          },
          {
            key: 'HEADING2',
            type: ''
          }
        ]
      },
      {
        key: 'StyleRecommendations',
        translations: [
          {
            key: 'HEADING',
            type: ''
          }
        ]
      },
      {
        key: 'KlarnaLink',
        translations: [
          {
            key: 'CTA',
            type: ''
          },
          {
            key: 'HINT',
            type: ''
          },
          {
            key: 'LINK',
            type: ''
          }
        ]
      }
    ]
  }
]

export const Application = ({ lang, country, user }: ApplicationProps) => {
  const [value, setValue] = useState<{ [k: string]: { [k: string]: string } }>(
    {}
  )

  useEffect(() => {
    //call to get translations
    console.log(country, lang, user)
  }, [country, lang, user])

  return (
    <Tabs defaultActiveKey='0'>
      {config.map(({ title, sections }, key) => (
        <Tab key={key} eventKey={key} title={title} style={{ padding: '1%' }}>
          <Accordion defaultActiveKey='0'>
            {sections.map(({ key: sectionKey, translations }, i) => (
              <Accordion.Item eventKey={String(i)} key={sectionKey}>
                <Accordion.Header>{sectionKey}</Accordion.Header>
                <Accordion.Body>
                  {translations.map(({ key: tKey, type }) => {
                    if (type === 'editor') {
                      return (
                        <TextEditor
                          key={tKey}
                          title={tKey}
                          value={value?.[sectionKey]?.[tKey] || ''}
                          onChange={value => {
                            setValue(cValue => {
                              return {
                                ...cValue,
                                [sectionKey]: { [tKey]: value }
                              }
                            })
                          }}
                        />
                      )
                    }
                    return (
                      <TextArea
                        key={tKey}
                        title={tKey}
                        value={value?.[sectionKey]?.[tKey] || ''}
                        onChange={value => {
                          setValue(cValue => {
                            return {
                              ...cValue,
                              [sectionKey]: { [tKey]: value }
                            }
                          })
                        }}
                      />
                    )
                  })}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Tab>
      ))}
    </Tabs>
  )
}
