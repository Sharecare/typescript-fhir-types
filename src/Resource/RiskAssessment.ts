
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { RiskAssessment_Prediction } from '../Resource/RiskAssessment_Prediction';
import { Uri } from '../Scalar/Uri';

        

        /**
         * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. 
         */
        export class RiskAssessment  {

            constructor() {
                this.Subject = new Reference();
            }

            
                /**
                 * This is a RiskAssessment resource
                 */
                ResourceType: string = 'RiskAssessment;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Business identifier assigned to the risk assessment.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * A reference to the request that is fulfilled by this risk assessment.
                 */
                BasedOn? : Reference;
                

                /**
                 * A reference to a resource that this risk assessment is part of, such as a Procedure.
                 */
                Parent? : Reference;
                

                /**
                 * The status of the RiskAssessment, using the same statuses as an Observation.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The algorithm, process or mechanism used to evaluate the risk.
                 */
                Method? : CodeableConcept;
                

                /**
                 * The type of the risk assessment performed.
                 */
                Code? : CodeableConcept;
                

                /**
                 * The patient or group the risk assessment applies to.
                 */
                Subject : Reference;
                

                /**
                 * The encounter where the assessment was performed.
                 */
                Context? : Reference;
                

                /**
                 * The date (and possibly time) the risk assessment was performed.
                 */
                OccurrenceDateTime? : String;
                

                /**
                 * Extensions for occurrenceDateTime
                 */
                _occurrenceDateTime? : Element;
                

                /**
                 * The date (and possibly time) the risk assessment was performed.
                 */
                OccurrencePeriod? : Period;
                

                /**
                 * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
                 */
                Condition? : Reference;
                

                /**
                 * The provider or software application that performed the assessment.
                 */
                Performer? : Reference;
                

                /**
                 * The reason the risk assessment was performed.
                 */
                ReasonCode? : Array<CodeableConcept>;
                

                /**
                 * Resources supporting the reason the risk assessment was performed.
                 */
                ReasonReference? : Array<Reference>;
                

                /**
                 * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
                 */
                Basis? : Array<Reference>;
                

                /**
                 * Describes the expected outcome for the subject.
                 */
                Prediction? : Array<RiskAssessment_Prediction>;
                

                /**
                 * A description of the steps that might be taken to reduce the identified risk(s).
                 */
                Mitigation? : String;
                

                /**
                 * Extensions for mitigation
                 */
                _mitigation? : Element;
                

                /**
                 * Additional comments about the risk assessment.
                 */
                Note? : Array<Annotation>;
                
        }
        