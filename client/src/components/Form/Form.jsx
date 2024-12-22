import React, { useState } from "react";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";

export default function ForumForm() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        sex: "",
        chestPainType: "",
        restingBP: "",
        cholesterol: "",
        restingECG: "",
        maxHeartRate: "",
        exercise: "",
        drinking: "",
        smoking: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted successfully!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-8 py-12 bg-gray-50">
            <div className="w-full max-w-3xl p-10 bg-white shadow-lg rounded-xl">
                <h1 className="mb-8 text-3xl font-semibold text-center text-gray-800">
                    Health Forum Submission
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Age */}
                    <div className="space-y-2">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-600">
                            Age
                        </label>
                        <Input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter your age"
                            required
                        />
                    </div>

                    {/* Sex */}
                    <div className="space-y-2">
                        <label htmlFor="sex" className="block text-sm font-medium text-gray-600">
                            Sex
                        </label>
                        <Select
                            value={formData.sex}
                            onValueChange={(value) => handleSelectChange("sex", value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select your sex" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Male">Male</SelectItem>
                                <SelectItem value="Female">Female</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="chestPainType" className="block text-sm font-medium text-gray-600">
                            Chest Pain Type
                        </label>
                        <Select
                            value={formData.chestPainType}
                            onValueChange={(value) => handleSelectChange("chestPainType", value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select chest pain type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Typical Angina">Typical Angina</SelectItem>
                                <SelectItem value="Atypical Angina">Atypical Angina</SelectItem>
                                <SelectItem value="Non-anginal Pain">Non-anginal Pain</SelectItem>
                                <SelectItem value="Asymptomatic">Asymptomatic</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Resting BP */}
                    <div className="space-y-2">
                        <label htmlFor="restingBP" className="block text-sm font-medium text-gray-600">
                            Resting Blood Pressure (mmHg)
                        </label>
                        <Input
                            type="number"
                            id="restingBP"
                            name="restingBP"
                            value={formData.restingBP}
                            onChange={(e) => setFormData({ ...formData, restingBP: e.target.value })}
                            placeholder="Enter your resting BP"
                            required
                        />
                    </div>

                    {/* Cholesterol */}
                    <div className="space-y-2">
                        <label htmlFor="cholesterol" className="block text-sm font-medium text-gray-600">
                            Cholesterol (mg/dL)
                        </label>
                        <Input
                            type="number"
                            id="cholesterol"
                            name="cholesterol"
                            value={formData.cholesterol}
                            onChange={(e) => setFormData({ ...formData, cholesterol: e.targetvalue })}
                            placeholder="Enter cholesterol level"
                            required
                        />
                    </div>

                    {/* Resting ECG */}
                    <div className="space-y-2">
                        <label htmlFor="restingECG" className="block text-sm font-medium text-gray-600">
                            Resting ECG Results
                        </label>
                        <Input
                            id="restingECG"
                            name="restingECG"
                            value={formData.restingECG}
                            onChange={(e) => setFormData({ ...formData, restingECG: e.targetvalue })}
                            placeholder="Enter ECG results"
                        />
                    </div>

                    {/* Max Heart Rate */}
                    <div className="space-y-2">
                        <label htmlFor="maxHeartRate" className="block text-sm font-medium text-gray-600">
                            Max Heart Rate Achieved
                        </label>
                        <Input
                            type="number"
                            id="maxHeartRate"
                            name="maxHeartRate"
                            value={formData.maxHeartRate}
                            onChange={(e) => setFormData({ ...formData, maxHeartRate: e.targetvalue })}
                            placeholder="Enter max heart rate"
                        />
                    </div>

                    {/* Exercise Induced Angina */}
                    <div className="space-y-2">
                        <label htmlFor="exercise" className="block text-sm font-medium text-gray-600">
                            Exercise Induced Angina
                        </label>
                        <Select
                            value={formData.exercise}
                            onValueChange={(value) => handleSelectChange("exercise", value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Yes">Yes</SelectItem>
                                <SelectItem value="No">No</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Drinking Habits */}
                    <div className="space-y-2">
                        <label htmlFor="drinking" className="block text-sm font-medium text-gray-600">
                            Drinking Habits
                        </label>
                        <Select
                            value={formData.drinking}
                            onValueChange={(value) => handleSelectChange("drinking", value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Never">Never</SelectItem>
                                <SelectItem value="Occasionally">Occasionally</SelectItem>
                                <SelectItem value="Frequently">Frequently</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Smoking Habits */}
                    <div className="space-y-2">
                        <label htmlFor="smoking" className="block text-sm font-medium text-gray-600">
                            Smoking Habits
                        </label>
                        <Select
                            value={formData.smoking}
                            onValueChange={(value) => handleSelectChange("smoking", value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Never">Never</SelectItem>
                                <SelectItem value="Occasionally">Occasionally</SelectItem>
                                <SelectItem value="Frequently">Frequently</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}