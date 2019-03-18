
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';


import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_CarePlan_Activity, ICarePlan_Activity } from './RTTI_CarePlan_Activity';
import { RTTI_Annotation, IAnnotation } from './RTTI_Annotation';




export interface ICarePlan {

    /**
     * This is a CarePlan resource
     */
    resourceType: 'CarePlan'


    /**
     * Identifies the patient or group whose intended care is described by the plan.
     */
    subject: IReference;


    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;


    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: IMeta;


    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;


    /**
     * Extensions for implicitRules
     */
    _implicitRules?: IElement;


    /**
     * The base language in which the resource is written.
     */
    language?: string;


    /**
     * Extensions for language
     */
    _language?: IElement;


    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: INarrative;


    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: IResourceList[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * Business identifiers assigned to this care plan by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: IIdentifier[];


    /**
     * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
     */
    instantiatesCanonical?: string[];


    /**
     * The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
     */
    instantiatesUri?: string[];


    /**
     * Extensions for instantiatesUri
     */
    _instantiatesUri?: IElement[];


    /**
     * A care plan that is fulfilled in whole or in part by this care plan.
     */
    basedOn?: IReference[];


    /**
     * Completed or terminated care plan whose function is taken by this new care plan.
     */
    replaces?: IReference[];


    /**
     * A larger care plan of which this particular care plan is a component or step.
     */
    partOf?: IReference[];


    /**
     * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
     */
    status?: string;


    /**
     * Extensions for status
     */
    _status?: IElement;


    /**
     * Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.
     */
    intent?: string;


    /**
     * Extensions for intent
     */
    _intent?: IElement;


    /**
     * Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.
     */
    category?: ICodeableConcept[];


    /**
     * Human-friendly name for the care plan.
     */
    title?: string;


    /**
     * Extensions for title
     */
    _title?: IElement;


    /**
     * A description of the scope and nature of the plan.
     */
    description?: string;


    /**
     * Extensions for description
     */
    _description?: IElement;


    /**
     * Identifies the original context in which this particular care plan was created.
     */
    context?: IReference;


    /**
     * Indicates when the plan did (or is intended to) come into effect and end.
     */
    period?: IPeriod;


    /**
     * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
     */
    created?: string;


    /**
     * Extensions for created
     */
    _created?: IElement;


    /**
     * When populated, the author is responsible for the care plan.  The care plan is attributed to the author.
     */
    author?: IReference;


    /**
     * Identifies the individual(s) or organization who provided the contents of the care plan.
     */
    contributor?: IReference[];


    /**
     * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
     */
    careTeam?: IReference[];


    /**
     * Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
     */
    addresses?: IReference[];


    /**
     * Identifies portions of the patient's record that specifically influenced the formation of the plan.  These might include comorbidities, recent procedures, limitations, recent assessments, etc.
     */
    supportingInfo?: IReference[];


    /**
     * Describes the intended objective(s) of carrying out the care plan.
     */
    goal?: IReference[];


    /**
     * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
     */
    activity?: ICarePlan_Activity[];


    /**
     * General notes about the care plan not covered elsewhere.
     */
    note?: IAnnotation[];

}



export const RTTI_CarePlan: t.Type<ICarePlan> = t.recursion('ICarePlan', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('CarePlan'),
            subject: RTTI_Reference
        })
        ,

        t.partial({
            id: t.string,
            meta: RTTI_Meta,
            implicitRules: t.string,
            _implicitRules: RTTI_Element,
            language: t.string,
            _language: RTTI_Element,
            text: RTTI_Narrative,
            contained: t.array(RTTI_ResourceList),
            extension: t.array(RTTI_Extension),
            modifierExtension: t.array(RTTI_Extension),
            identifier: t.array(RTTI_Identifier),
            instantiatesCanonical: t.array(t.string),
            instantiatesUri: t.array(t.string),
            _instantiatesUri: t.array(RTTI_Element),
            basedOn: t.array(RTTI_Reference),
            replaces: t.array(RTTI_Reference),
            partOf: t.array(RTTI_Reference),
            status: t.string,
            _status: RTTI_Element,
            intent: t.string,
            _intent: RTTI_Element,
            category: t.array(RTTI_CodeableConcept),
            title: t.string,
            _title: RTTI_Element,
            description: t.string,
            _description: RTTI_Element,
            context: RTTI_Reference,
            period: RTTI_Period,
            created: t.string,
            _created: RTTI_Element,
            author: RTTI_Reference,
            contributor: t.array(RTTI_Reference),
            careTeam: t.array(RTTI_Reference),
            addresses: t.array(RTTI_Reference),
            supportingInfo: t.array(RTTI_Reference),
            goal: t.array(RTTI_Reference),
            activity: t.array(RTTI_CarePlan_Activity),
            note: t.array(RTTI_Annotation)
        })

    ])
);

