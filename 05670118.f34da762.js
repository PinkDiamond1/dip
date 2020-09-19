(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(1),r=a(9),l=(a(0),a(198)),b={lip:8,title:"Off-chain API Version 1 Extensions",authors:"Kevin Hurley (@kphfb)",status:"draft",type:"informational",created:"09/18/2020"},i={id:"lip-8",title:"Off-chain API Version 1 Extensions",description:"# Summary",source:"@site/all-docs__GENERATED/lip-8.md",permalink:"/lip-8",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/lip-8.md"},p=[{value:"<em>VERSION SUPPORT: Supported only in version 1 of off-chain APIs</em>",id:"version-support-supported-only-in-version-1-of-off-chain-apis",children:[]},{value:"Request/Response Payload",id:"requestresponse-payload",children:[{value:"CommandRequestObject",id:"commandrequestobject",children:[]},{value:"FundPullPreApprovalCommand object",id:"fundpullpreapprovalcommand-object",children:[]},{value:"FundPullPreApprovalObject",id:"fundpullpreapprovalobject",children:[]},{value:"CurrencyObject",id:"currencyobject",children:[]},{value:"Pre Approval Status Enum",id:"pre-approval-status-enum",children:[]},{value:"CommandResponseObject",id:"commandresponseobject",children:[]}]},{value:"Usage of a pre-approval",id:"usage-of-a-pre-approval",children:[{value:"PaymentObject Extension",id:"paymentobject-extension",children:[]},{value:"<em>VERSION SUPPORT: Supported only in version 1 of off-chain APIs</em>",id:"version-support-supported-only-in-version-1-of-off-chain-apis-1",children:[]},{value:"PaymentActionObject Extension",id:"paymentactionobject-extension",children:[]},{value:"StatusEnum",id:"statusenum",children:[]}]}],c={rightToc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"summary"},"Summary"),Object(l.b)("hr",null),Object(l.b)("p",null,"An extension of the Off-Chain protocol to provide support for more advanced merchant use-cases."),Object(l.b)("hr",null),Object(l.b)("h1",{id:"abstract--motivation"},"Abstract / Motivation"),Object(l.b)("hr",null),Object(l.b)("p",null,"Version 0 of the Off-Chain Protocol is described in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/"}),"LIP 1"),".  Version 1 as described here is an extension of the Off-Chain Protocol and adds features to support more advanced functionality - particularly targeted to support merchant use-cases.  This is inclusive of pull payments, recurring payments, and auth/capture flows."),Object(l.b)("hr",null),Object(l.b)("h1",{id:"specification"},"Specification"),Object(l.b)("hr",null),Object(l.b)("h1",{id:"fund-pull-pre-approval"},"Fund Pull Pre-Approval"),Object(l.b)("h3",{id:"version-support-supported-only-in-version-1-of-off-chain-apis"},Object(l.b)("em",{parentName:"h3"},"VERSION SUPPORT: Supported only in version 1 of off-chain APIs")),Object(l.b)("p",null,"Establishes a relationship between sender and recipient where the recipient can now pull funds from the sender without sender approving each transaction.  This allows recipient to bill the sender without sender approving each payment.  This relationship exists between a subaddress on the biller side and a subaddress on the sender side.  After this request is POSTed, the target VASP can use out-of-band methods to determine if this request should be granted.  If the target VASP chooses to allow the relationship to be established, the biller can create a payment object and POST to the billed party\u2019s VASP to request funds.  The \u201cfunds_pull_approval_id\u201d object must then match the ID established by this request."),Object(l.b)("h2",{id:"requestresponse-payload"},"Request/Response Payload"),Object(l.b)("p",null,"All requests between VASPs are structured as ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/#commandrequestobject"}),Object(l.b)("inlineCode",{parentName:"a"},"CommandRequestObject"),"s")," and all responses are structured as ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/#commandresponseobject"}),Object(l.b)("inlineCode",{parentName:"a"},"CommandResponseObject"),"s"),".  For a fund pre-approval command, the resulting request takes a form of the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "_ObjectType": "CommandRequestObject",\n    "command_type": "FundPullPreApprovalCommand",\n    "cid": "88b282d6181129f682be0421d0ee9887",\n    "command": {\n        "_ObjectType": "FundPullPreApprovalCommand",\n        "_reads": {},\n        "_writes": {\n            "lbr1pg9q5zs2pg9q5zs2pg9q5zs2pgyqqqqqqqqqqqqqqspa3m_5b8403c986f53fe072301fe950d030cb": "88b282d6181129f682be0421d0ee9887"\n        },\n        "fund_pull_pre_approval": {\n            "address": "lbr1pgfpyysjzgfpyysjzgfpyysjzgf3xycnzvf3xycsm957ne",\n            "biller_address": "lbr1pg9q5zs2pg9q5zs2pg9q5zs2pg9skzctpv9skzcg9kmwta",\n            "funds_pre_approval_id": "lbr1pg9q5zs2pg9q5zs2pg9q5zs2pgyqqqqqqqqqqqqqqspa3m_7b8404c986f53fe072301fe950d030de"\n            "expiration_timestamp": 72322, \n            "max_cumulative_amount": {\n                "amount": 1000,\n                "currency": "LBR"\n            }\n            "description": "Kevin\'s online shop",\n            "status": "pending",\n        }\n    },\n}\n')),Object(l.b)("p",null,"A response would look like the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "_ObjectType": "CommandResponseObject",\n    "status": "success",\n}\n')),Object(l.b)("h3",{id:"commandrequestobject"},"CommandRequestObject"),Object(l.b)("p",null,"For a fund pre-approval request, the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/#commandrequestobject"}),"command_type"),' field is set to "FundPullPreApprovalCommand".  The command object is a ',Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#fundpullpreapprovalcommand-object"}),Object(l.b)("inlineCode",{parentName:"a"},"FundPullPreApprovalCommand")," object"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n\n    "_ObjectType": "CommandRequestObject",\n    "command_type": "FundPullPreApprovalCommand",\n    "cid": "88b282d6181129f682be0421d0ee9887",\n    "command": FundPullPreApprovalCommand(),\n}\n')),Object(l.b)("h3",{id:"fundpullpreapprovalcommand-object"},"FundPullPreApprovalCommand object"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_ObjectType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The fixed string ",Object(l.b)("inlineCode",{parentName:"td"},"FundPullPreApprovalCommand"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fund_pull_pre_approval"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#fundpullpreapprovalobject"}),Object(l.b)("inlineCode",{parentName:"a"},"FundPullPreApprovalObject"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains a ",Object(l.b)("inlineCode",{parentName:"td"},"FundPullPreApprovalObject")," that either creates a new pre-approval or updates an existing pre-approval. Note that strict validity checks apply when updating pre-approvals, that are listed in the section below describing these Objects. An invalid update or initial pre-approval object results in a Command error")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_reads"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSON Object map"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Must be an Object containing mappings of ",Object(l.b)("inlineCode",{parentName:"td"},"reference_id")," to latest Version as represented by the ",Object(l.b)("inlineCode",{parentName:"td"},"cid")," of the latest Command which successfully mutated the Object referenced by the ",Object(l.b)("inlineCode",{parentName:"td"},"reference_id"),". The value in this field must match a ",Object(l.b)("inlineCode",{parentName:"td"},"cid")," previously specified by a Command by the ",Object(l.b)("inlineCode",{parentName:"td"},"_writes")," parameter on a prior Command for this payment Object.  For a fund_pull_pre_approval Command, only zero or one ",Object(l.b)("inlineCode",{parentName:"td"},"_reads")," values should be specified since fund approvals are only dependent upon at most one prior Version of an Object. A list with any other number of items results in a Command error.  If the list is empty this fund_pull_pre_approval Command defines a new fund_pull_pre_approval. If the list contains one item, then this Command updates the shared ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#fundpullpreapprovalobject"}),Object(l.b)("inlineCode",{parentName:"a"},"FundPullPreApprovalObject")),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_writes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSON object map"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For a fund_pull_pre_approval Command, the ",Object(l.b)("inlineCode",{parentName:"td"},"_writes")," field may only be a single key-value pair since a fund_pull_pre_approval Command only operates upon one Object.  This field maps the ",Object(l.b)("inlineCode",{parentName:"td"},"reference_id")," of the Object being written to its new Version.")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "_ObjectType": "FundPullPreApprovalCommand",\n    "_reads": {},\n    "_writes": {\n        "lbr1pg9q5zs2pg9q5zs2pg9q5zs2pgyqqqqqqqqqqqqqqspa3m_5b8403c986f53fe072301fe950d030cb": "88b282d6181129f682be0421d0ee9887"\n    },\n    "fund_pull_pre_approval": {\n         FundPullPreApprovalObject(),\n    }\n}\n')),Object(l.b)("h3",{id:"fundpullpreapprovalobject"},"FundPullPreApprovalObject"),Object(l.b)("p",null,"The structure in this object can be a full pre-approval or just the fields of an existing pre-approval object that need to be changed. Some fields are immutable after they are defined once (see below). Others can by updated multiple times. Updating immutable fields with a different value results in a command error, but it is acceptable to re-send the same value."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"address"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required for creation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Address of account from which the pre-approval is being requested. Addresses may be single use or valid for a limited time, and therefore VASPs should not rely on them remaining stable across time or different VASP addresses. The addresses are encoded using bech32. The bech32 address encodes both the address of the VASP as well as the specific user\'s subaddress. They should be no longer than 80 characters. Mandatory and immutable. For Libra addresses, refer to "account identifier" section in LIP-5 for format.')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"biller_address"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required for creation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Address of account from which billing will happen. Addresses may be single use or valid for a limited time, and therefore VASPs should not rely on them remaining stable across time or different VASP addresses. The addresses are encoded using bech32. The bech32 address encodes both the address of the VASP as well as the specific user\'s subaddress. They should be no longer than 80 characters. Mandatory and immutable. For Libra addresses, refer to "account identifier" section in LIP-5 for format.')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"expiration_timestamp"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unix timestamp indicating the time at which this pre-approval will expire - after which no funds pulls can occur.  To expire an existing pre-approval early, this field can be updated with the current unix timestamp.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"funds_pre_approval_id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique reference ID of this pre-approval on the pre-approval initiator VASP (the VASP which originally created this pre-approval object). This value should be unique, and formatted as \u201c<creator",Object(l.b)("em",{parentName:"td"},"vasp_onchain_address_bech32>"),"<unique_id>\u201d.  For example, \u201dlbr1pg9q5zs2pg9q5zs2pg9q5zs2pgyqqqqqqqqqqqqqqspa3m_7b8404c986f53fe072301fe950d030de\u201c. Note that this should be the VASP address and thus have a subaddress portion of 0. This field is mandatory on pre-approval creation and immutable after that.  Updates to an existing pre-approval must also include the previously created pre-approval ID.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"max_cumulative_amount"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#currencyobject"}),"CurrencyObject")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max cumulative amount that is approved for funds pre-approval.  This is the sum across all transactions that occur while utilizing this funds pre-approval.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Description of the funds pre-approval.  May be utilized so show the user a description about the request for funds pre-approval")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str enum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status of this pre-approval. See ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#pre-approval-status-enum"}),"Pre-Approval Status Enum")," for valid statuses.")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "address": "lbr1pgfpyysjzgfpyysjzgfpyysjzgf3xycnzvf3xycsm957ne",\n    "biller_address": "lbr1pg9q5zs2pg9q5zs2pg9q5zs2pg9skzctpv9skzcg9kmwta",\n    "funds_pre_approval_id": "lbr1pg9q5zs2pg9q5zs2pg9q5zs2pgyqqqqqqqqqqqqqqspa3m_7b8404c986f53fe072301fe950d030de"\n    "expiration_timestamp": 72322, \n    "max_cumulative_amount": CurrencyObject(),\n    "description": "Kevin\'s online shop",\n    "status": "valid",\n}\n')),Object(l.b)("h3",{id:"currencyobject"},"CurrencyObject"),Object(l.b)("p",null,"Represents an amount and the currency type."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Base units are the same as for on-chain transactions for this currency.  For example, if LibraUSD is represented on-chain where \u201c1\u201d equals 1e-6 dollars, then \u201c1\u201d equals the same amount here.  For any currency, the on-chain mapping must be used for amounts.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currency"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str enum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"One of the supported on-chain currency types - ex. LBR, etc.")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "amount": 100,\n    "currency": "LBR",\n}\n')),Object(l.b)("h3",{id:"pre-approval-status-enum"},"Pre Approval Status Enum"),Object(l.b)("p",null,"Valid values are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pending")," - Pending user/VASP approval."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"valid")," - Approved by the user/VASP and ready for usage."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"rejected")," - User/VASP did not approve the pre-approval request."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"closed")," - Approval has been closed by the user/VASP and can no longer be used.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Valid Status Transitions"),". Either party in the pre-approval agreement can mutate the status. The status always initially begins as ",Object(l.b)("inlineCode",{parentName:"p"},"pending")," at which time a user must agree to the pre-approval request.  Once the user has reviewed the request, the billee VASP will update the pre-approval status to ",Object(l.b)("inlineCode",{parentName:"p"},"valid")," (if the user agreed) or ",Object(l.b)("inlineCode",{parentName:"p"},"rejected")," (if the user rejected the pre-approval)."),Object(l.b)("p",null,"At any point, the user can withdraw permission at which point the status will be updated to ",Object(l.b)("inlineCode",{parentName:"p"},"closed"),"."),Object(l.b)("h3",{id:"commandresponseobject"},"CommandResponseObject"),Object(l.b)("p",null,"All responses to a CommandRequestObject are in the form of a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"basic_building_blocks.md#commandresponseobject"}),"CommandResponseObject")),Object(l.b)("h2",{id:"usage-of-a-pre-approval"},"Usage of a pre-approval"),Object(l.b)("p",null,"Pre-approval usage manifests as an extension of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/#paymentcommand-object"}),"PaymentCommand"),".  The extension happens primarily within the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/#paymentobject"}),"PaymentObject")," as seen below."),Object(l.b)("h3",{id:"paymentobject-extension"},"PaymentObject Extension"),Object(l.b)("p",null,"Payment object remains the same as ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/#paymentobject"}),"PaymentObject"),", but adds the following fields:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"funds_pre_approval_id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID of the funds pre-approval previously created via a ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#fundpullpreapprovalcommand-object"}),"FundPullPreApprovalCommand"),'.  Must match the value of "funds_pre_approval_id" in the already-created funds pre-approval.')))),Object(l.b)("p",null,'In addition, the "_reads" field of the PaymentObject must contain the latest version of the FundPullPreApprovalObject.'),Object(l.b)("hr",null),Object(l.b)("h1",{id:"authcapture"},"Auth/Capture"),Object(l.b)("h3",{id:"version-support-supported-only-in-version-1-of-off-chain-apis-1"},Object(l.b)("em",{parentName:"h3"},"VERSION SUPPORT: Supported only in version 1 of off-chain APIs")),Object(l.b)("p",null,"Authorization allows the placing of holds on funds with the assurance that an amount up to the held amount can be captured at a later time.  An example of this is for delayed fulfillment or pre-authorizing an expected amount to ensure that an amount can be charged after services are rendered."),Object(l.b)("p",null,"When an authorization happens, the VASP agreeing to the authorization must lock the funds for the specified amount of time - the VASP is agreeing to a guarantee that the funds will be available if later captured."),Object(l.b)("p",null,"Auth/capture is an extension of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/#paymentcommand-object"}),"PaymentCommand"),".  The extension happens primarily within the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/#paymentactionobject"}),"PaymentActionObject")," and the status changes within the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/#paymentactorobject"}),"PaymentActor"),"."),Object(l.b)("h3",{id:"paymentactionobject-extension"},"PaymentActionObject Extension"),Object(l.b)("p",null,"The ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/#paymentactionobject"}),"PaymentActionObject")," now becomes:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Amount of the transfer.  Base units are the same as for on-chain transactions for this currency.  For example, if LibraUSD is represented on-chain where \u201c1\u201d equals 1e-6 dollars, then \u201c1\u201d equals the same amount here.  For any currency, the on-chain mapping must be used for amounts.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currency"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"One of the supported on-chain currency types - ex. LBR, etc.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"action"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Populated in the request.  This value indicates the requested action to perform. For a normal transfer, "charge" is still used.  For auth and capture, "auth" and "capture" are now available.  "capture" can only be performed after a valid "auth"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"valid_until"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unix timestamp indicating the time period for which this authorization is valid.  Once this time has been reached, the authorization is no longer able to be captured and funds should be unlocked.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"timestamp"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unix timestamp indicating the time that the payment Command was created.")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "amount": 100,\n    "currency": "LBR",\n    "action": "auth",\n    "valid_until": 74000,\n    "timestamp": 72322,\n}\n')),Object(l.b)("h3",{id:"statusenum"},"StatusEnum"),Object(l.b)("p",null,"The auth/capture flow now adds the following to the status enum of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://lip.libra.org/lip-1/#paymentactorobject"}),"PaymentActor"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"authorized")," - Payment amount is authorized but not yet captured.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"abort")," may still be used to cancel the authorization early.  Once a capture action occurs, the status of the payment will now be updated to ",Object(l.b)("inlineCode",{parentName:"p"},"ready_for_settlement"),"."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Valid Status Transitions"),". ",Object(l.b)("inlineCode",{parentName:"p"},"authorized")," is now a valid initial value and may be followed by ",Object(l.b)("inlineCode",{parentName:"p"},"ready_for_settlement")," (upon a successful capture) or ",Object(l.b)("inlineCode",{parentName:"p"},"abort")," (if one side wishes to cancel the auth)."))}o.isMDXComponent=!0},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=o(a),u=n,m=s["".concat(b,".").concat(u)]||s[u]||d[u]||l;return a?r.a.createElement(m,i({ref:t},c,{components:a})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var c=2;c<l;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);