import { faker } from "@faker-js/faker";
import { DataFactory, TemplateMap } from "../DataFactory";
import { CustomEntity, DescriptionEntity } from "../entities/CustomEntity";

export class StateCityTemplate extends DataFactory<CustomEntity> {
    protected templates: TemplateMap<CustomEntity> = {
        cityAndStateValid: () => ({
            state: 'Rio de Janeiro',
            city: 'Rio de Janeiro'
        })
    };
}

export class PlanSearchTemplate extends DataFactory<DescriptionEntity> {
    protected templates: TemplateMap<DescriptionEntity> = {
        planAndSearchValid:(plan?: string, search?: string) =>({
            plan: plan || 'AMS',
            search: search || '3D DIAGNOSE LTDA'
        }),
        
        planAndSearchInvalid: (plan?: string, search?: string) => ({
            plan: plan ||'AMS',
            search: search || 'Invalido'
        }),
    };
}