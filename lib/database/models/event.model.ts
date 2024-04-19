import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
        _id: string;
        title: string;
        description?: string;
        location?: string;
        createdAT: Date;
        imageUrl: string;
        startDateTime: Date;
        endDateTime: Date;
        price?: string;
        isfree: boolean;
        url?: string;
        category: { _id: string, name: string};
        organozer:  { _id: string, firstName: string, lastName: string};
}


const EventSchema = new Schema ({
        title: { type: String, required: true },
        description: { type: String },
        location: { type: String },
        createdAT: { type: Date, default: Date.now },
        imageUrl: { type: String, required: true },
        startDateTime: { type: Date, default: Date.now },
        endDateTime: { type: Date, default: Date.now },
        price: { type: String },
        isfree: { type: Boolean, default: false },
        url: { type: String },
        category: { type: Schema.Types.ObjectId, ref: 'Category' },
        organozer: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Event = models.Event || model('Event', EventSchema);

export default Event;