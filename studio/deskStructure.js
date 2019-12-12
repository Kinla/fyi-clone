import S from "@sanity/desk-tool/structure-builder";
import { FiInbox } from 'react-icons/fi'
import { MdSettings } from 'react-icons/md'

const hiddenDocTypes = listItem => ![
  "siteSettings"
].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType("siteSettings")
            .documentId("global-config")
        )
        .icon(MdSettings),
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes),
      S.divider(),  
      S.listItem()
        .title('Articles by Category')
        .child(
          // List out all categories
          S.documentTypeList('category')
            .title('Articles by Category')
            .child(catId =>
              // List out project documents where the _id for the selected
              // category appear as a _ref in the project’s categories array
              S.documentList()
                .schemaType('article')
                .title('Articles')
                .filter(
                  '_type == "article" && $catId in categories[]._ref'
                )
                .params({ catId })
            )
        )
        .icon(FiInbox),
        S.listItem()
            .title('Articles by Author')
            .child(
                // List out all categories
                S.documentTypeList('author')
                    .title('Articles by Author')
                    .child(catId =>
                    // List out project documents where the _id for the selected
                    // category appear as a _ref in the project’s categories array
                    S.documentList()
                        .schemaType('article')
                        .title('Articles')
                        .filter(
                        '_type == "article" && $catId in author[]._ref'
                        )
                        .params({ catId })
                )
            )
            .icon(FiInbox),        
    ]);